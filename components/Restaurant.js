import React from "react"

import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Rating from './Rating';

export default (props) => {
    let restaurant = props.restaurant
    let navigation = props.navigation;

    let rating = Math.floor(restaurant.RatingStars) / 2

    return <TouchableOpacity
        style={styles.touchableRow}
        activeOpacity={0.3}
        onPress={() => {
            navigation.navigate("Company Info", {restaurantInfo: restaurant})
        }}
    >
        <View style={styles.topLevelView}>
            <View style={{justifyContent: "center"}}>
                <Image style={styles.imageColumn} source={{uri: restaurant.LogoUrl}} />
            </View>
            <View style={styles.topLevelDescriptionView}>
                <Text style={styles.restaurantName}>{restaurant.Name}</Text>
                <View style={styles.cuisineTypesView}>
                    <Text style={styles.cuisineTypesTitle}>Cuisine Types:</Text>
                    <View style={styles.cuisineTypesListView}>
                        {restaurant.CuisineTypes.map((cuisineType, i) => (
                                <Text style={styles.cuisineTypeText} key={i}>{cuisineType.Name}
                                    {i < restaurant.CuisineTypes.length - 1 ? ", " : ""}
                                </Text>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.ratingView}>
                    <Rating rating={rating} />
                </View>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    touchableRow: {
        width: "100%"
    },
    topLevelView: {
        flexDirection:"row",
        borderBottomColor:"#ddd",
        borderBottomWidth:1
    },
    imageColumn: {
        width: 50,
        height: 50,
        backgroundColor:"#ddd"
    },
    topLevelDescriptionView: {
        backgroundColor:"white",
        paddingLeft: 10,
        paddingBottom: 10,
        flex: 1
    },
    restaurantName: {
        color: "black",
        fontWeight: "800",
        fontSize:16
    },
    cuisineTypesView: {
        flexDirection: "row",
        alignItems: "center"
    },
    cuisineTypesTitle: {
        color:"black",
        marginRight: 10,
        fontWeight:"700",
        fontSize: 14
    },
    cuisineTypesListView: {
        flexDirection: "row",
        alignItems: "center"
    },
    cuisineTypeText: {
        color: "black"
    },
    ratingView: {
        flexDirection: "row",
        marginTop: 5
    }
})
