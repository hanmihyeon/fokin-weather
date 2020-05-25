import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: [
            "#7F7FD5", "#86A8E7", "#91EAE4"
        ],
        title: "Clouds",
        subtitle: "It's cloudy"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: [
            "#F09819", "#EDDE5D"
        ],
        title: "Thunderstorm",
        subtitle: "Never gonna outside"
    },
    Drizzle: {
        iconName: "cloud-drizzle",
        gradient: [
            "#4CB8C4", "#3CD3AD"
        ],
        title: "Drizzle",
        subtitle: "It's drizzle now"
    },
    Rain: {
        iconName: "cloud-rain",
        gradient: [
            "#614385", "#516395"
        ],
        title: "Rain",
        subtitle: "Plz get umbrella"
    },
    Snow: {
        iconName: "snowflake",
        gradient: [
            "#6DD5FA", "#FFFFFF"
        ],
        title: "Snow",
        subtitle: "What a beautiful snow"
    },
    Clear: {
        iconName: "sun",
        gradient: [
            "#DD5E89", "#F7BB97"
        ],
        title: "Clear",
        subtitle: "Let's go outside!"
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName || "weather-sunset"}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View
                style={styles.textContainer}>
                <View>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf([
            "Thunderstorm",
            "Drizzle",
            "Rain",
            "Snow",
            "Atmosphere",
            "Clear",
            "Clouds"
        ])
        .isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
});