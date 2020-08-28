import React, {useState} from "react"
import {RestaurantsContext} from './../contexts/RestaurantsProvider';
import {FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';

import Restaurant from '../components/Restaurant';

export default function HomeScreen({navigation}) {
    const [outcodeTxt, setOutcodeText] = useState("")
    const [emptyRestaurantResults, setEmptyRestaurantResults] = useState(false)

    return <RestaurantsContext.Consumer>{
        restaurantsInfo => <SafeAreaView>
            <View style={styles.topLevelView}>
                <TextInput placeholder={"Enter outcode"}
                           style={styles.textInput} value={outcodeTxt}
                           onChangeText={txt => {
                               setOutcodeText(txt)
                           }}
                />
                <TouchableOpacity
                    style={{...styles.submitButtonTouchable, backgroundColor: outcodeTxt.length ? "blue" : "#777"}}
                    activeOpacity={outcodeTxt.length ? 0.3 : 1}
                    onPress={() => {
                        setEmptyRestaurantResults(false)

                        fetch(`https://uk.api.just-eat.io/restaurants/bypostcode/${outcodeTxt}`)
                            .then(res => res.json())
                            .then(json => {
                                if(!json?.Restaurants.length){
                                    setEmptyRestaurantResults(true)
                                }

                                restaurantsInfo.setRestaurants(json?.Restaurants.filter(store => store.IsOpenNow && store.IsOpenNowForDelivery))
                            }).catch(e => {
                            })
                    }}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.availableRestaurants}>Available Restaurants: {emptyRestaurantResults ? "None Found" : ""}</Text>
                <FlatList
                    data={restaurantsInfo.restaurants}
                    keyExtractor={store => store.Id + store.Name}
                    renderItem = {store => (
                        <Restaurant restaurant={store.item} navigation={navigation}/>
                    )}
                />
            </View>
        </SafeAreaView>
    }</RestaurantsContext.Consumer>
}
const styles = StyleSheet.create({
    topLevelView: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
        alignItems: "flex-end",
        justifyContent: "space-around"
    },
    textInput: {
        borderBottomColor: "#333",
        borderBottomWidth: 1,
        width: "60%"
    },
    submitButtonTouchable: {
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    submitButtonText: {
        color: "white"
    },
    availableRestaurants: {
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 10
    }
})
