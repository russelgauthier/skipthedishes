import React from "react"
import {Text, View, Image, StyleSheet} from 'react-native';
import Rating from '../components/Rating';

export default function CompanyInfoScreen({navigation, route}) {
    let restaurant = route.params.restaurantInfo;
    let rating = Math.floor(restaurant.RatingStars) / 2
    let openingDate = new Date(restaurant.OpeningTimeIso)
    let openingDateString = openingDate.toLocaleString()
    let deliveryOpeningTime = new Date(restaurant.DeliveryOpeningTime)
    let deliveryOpeningTimeString = deliveryOpeningTime.toLocaleString()

    return <View style={styles.topLevelView}>
        <View>
            <View style={styles.picAndNameView}>
                <Image style={styles.companyImage} source={{uri: restaurant.LogoUrl}} />
                <View style={styles.companyNameView}>
                    <Text style={styles.companyNameText}>{restaurant.Name}</Text>
                </View>
            </View>
            <View style={styles.ratingView}>
                <Rating rating={rating} />
            </View>
            <View style={styles.cuisineTypesView}>
                <View style={styles.cuisineTypesInnerView}>
                    <Text style={styles.cuisineTypesTitle}>Cuisine Types:</Text>
                    <View style={styles.cuisineTypesList}>
                        {restaurant.CuisineTypes.map((cuisineType, i) =>
                            <Text style={styles.cuisineTypeTitle} key={i}>
                                {cuisineType.Name}{i < restaurant.CuisineTypes.length - 1 ? ", " : ""}
                            </Text>)
                        }
                    </View>
                </View>
            </View>
            <View style={styles.addressTopLevelView}>
                <Text style={styles.addressTitle}>Address:</Text>
                <View>
                    <Text>{restaurant.Address.FirstLine}</Text>
                    <Text>{restaurant.Address.Postcode}</Text>
                    <Text>{restaurant.Address.City}</Text>
                </View>
            </View>
            <View style={styles.openingTimeTopLevelView}>
                <Text style={styles.openingTimeTitle}>Opening Time:</Text>
                <Text>{openingDateString}</Text>
            </View>
            <View style={styles.deliveryStartDateTopLevelView}>
                <Text style={styles.deliveryStartDateTitle}>Delivery Start Date: </Text>
                <Text>{deliveryOpeningTimeString}</Text>
            </View>
            <View style={styles.dealsTopLevelView}>
                <Text style={styles.dealsTitle}>Deals:</Text>
                <View>
                    {!restaurant.Deals.length && <Text>None currently</Text>}
                    {restaurant.Deals.map((deal, i) =>
                        <Text key={i}>
                            {deal?.Description}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    topLevelView: {
        flex: 1, backgroundColor:"white", paddingVertical:10, paddingHorizontal:5
    },
    picAndNameView: {
        alignItems: "center", flexDirection: "row"
    },
    companyImage: {
        width: 100, height: 100, backgroundColor:"#ddd"
    },
    companyNameView: {
        flex: 1, alignItems:"center"
    },
    companyNameText: {
        marginLeft: 30, fontSize:18, fontWeight:"500"
    },
    ratingView: {
        marginTop:30
    },
    cuisineTypesView: {
        marginTop:20
    },
    cuisineTypesInnerView: {
        flexDirection: "row", alignItems: "center"
    },
    cuisineTypesTitle: {
        color:"black", marginRight: 48, fontWeight:"700", fontSize: 14
    },
    cuisineTypesList: {
        flexDirection: "row", alignItems: "center"
    },
    cuisineTypeTitle: {
        color: "black"
    },
    addressTopLevelView: {
        flexDirection:"row", marginTop:20
    },
    addressTitle: {
        fontWeight: "600", paddingRight:90
    },
    openingTimeTopLevelView: {
        flexDirection: "row", marginTop: 20
    },
    openingTimeTitle: {
        paddingRight: 51, fontWeight: "600"
    },
    deliveryStartDateTopLevelView: {
        flexDirection: "row", marginTop: 20
    },
    deliveryStartDateTitle: {
        paddingRight: 14, fontWeight: "600"
    },
    dealsTopLevelView: {
        flexDirection:"row",
        marginTop: 20
    },
    dealsTitle: {
        marginRight: 109,
        fontWeight: "600"
    }
})
