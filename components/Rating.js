import React from "react"

import {View, Text, Image, StyleSheet} from "react-native"

export default (props) => {
    let ratingStarsArray = []
    for(let i = 0; i < 5; i++){
        ratingStarsArray.push(i)
    }

    return <View style={styles.topLevelView}>
        <Text style={styles.ratingTitle}>Rating:</Text>
        {ratingStarsArray.map((rating, i) => {
            return <View key={i}>
                {i <= props.rating && <Image source={require("./../img/stars-star-full.png")} style={styles.star} />}
                {i > props.rating && <Image source={require("./../img/stars-star-empty.png")} style={styles.star} />}
            </View>

        })}
    </View>;
}

const styles = StyleSheet.create({
    topLevelView: {
        flexDirection: "row"
    },
    ratingTitle: {
        marginRight: 10,
        fontWeight: "500"
    },
    star: {
        width:15,
        height:15,
        marginRight:2
    }
})
