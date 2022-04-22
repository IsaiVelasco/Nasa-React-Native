import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AppRegistry } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
var rssv;
var title = "No title";
var items = "No items";

const HomeScreen = () => {

    const [allowances, setAllowances] = useState([]);
    useEffect(() => {
        fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {

                setAllowances(rss);
                console.log(rss.items.length);
                rss.items.forEach(item => {
                    console.log(item.title);
                });

            });
    }, []);

    const navigation = useNavigation();

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
            <Text id="title" style={{
                textAlign: "center"
            }}>
                {allowances.title}
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("StackScreen")}
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    marginTop: "10%",
                    marginBottom: "10%",
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
                    Go to Stack
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}



export default HomeScreen;