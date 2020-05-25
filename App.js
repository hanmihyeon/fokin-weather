import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "3f8b78cbcc126d5e1c4be1adb9554066";

// 네이티브에서는 div, span 등을 쓰지 않고 view , text를 쓴다. view 가 div 같은 것
// openweathermap.org

export default class extends React.Component {
    state = {
        isLoading: true
    };

    getWeather = async (latitude, longitude) => {
        const {
          data: {
            main: { temp },
            weather
          }
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        this.setState({
          isLoading: false,
          condition: weather[0].main,
          temp
      });
      console.log(weather);
    };
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: {
                    latitude,
                    longitude
                }
            } = await Location.getCurrentPositionAsync();
            // Send to API and get weather!
            this.getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert("Can't find you.", "sosad");
        }

    };
    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {isLoading, temp, condition} = this.state;
        return isLoading
            ? <Loading/>
            : <Weather temp={Math.round(temp)} condition={condition}/>;
    }

}
