import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AppRegistry } from 'react-native';
import * as parse from 'react-native-rss-parser';

const HomeScreen = () => {
    const navigation = useNavigation();
    const getNews = () => {
        return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                console.log(rss.title);
                console.log(rss.items.length);
            });
    }
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            > Home Screen
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("StackScreen")}
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Go to Stack screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}



export default HomeScreen;