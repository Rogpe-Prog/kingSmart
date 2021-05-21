import React from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/Colors'

const NewEntryAddressPicker = ({ address, onChange }) => {

    const getLocation = (latitude, longitude) => {

        const formattedAddress = `Lat: ${latitude},\n Long: ${longitude}`
        Alert.alert(formattedAddress)
        
        Alert.alert('Localização', formattedAddress, [
            {
                text: 'Cancelar',
                onPress: () => {},
                style: 'cancel',
            },
            {
                text: "Confirmar",
                onPress: () => {onChange({
                    latitude: latitude, 
                    longitude: longitude, 
                    address: formattedAddress,
                })},
            }
        ])
        
        // Geocoder.init("AIzaSyDG184fCv1mOPhPRzDfS7EuFe9ZgbCI1Mo")
        // Geocoder.from({latitude, longitude})
        //     .then(json => {
        //         const formattedAddress = json.results[0].formatted_address
        //     })
        //     .catch(error => {
        //         console.error("NewEntryAddressPicker :: getLocation :: error on get localization", error)
        //     })
        //     Alert.alert("Houve um erro na localização, tente mais tarde.")

    }
    
    const getPosition = () => {
        Geolocation.getCurrentPosition(pos => {
            const latitude = pos.coords.latitude
            const longitude = pos.coords.longitude
            
            getLocation(latitude, longitude)
        }, error => {
            console.error("NewEntryAddressPicker :: getPosition :: error on get address", error)
        })
        Alert.alert("Houve um erro ao recuperar a posição, tente mais tarde.")
    }

    const onButtonPress = () => {
        if(address){
            Alert.alert('Localização', address, [
                {
                    text: 'Apagar',
                    onPress: () => {
                        onChange({latitude: null, longitude: null, address: ''})
                    },
                    style: 'cancel',
                },
                    {
                        text: 'Ok',
                        onPress: () => console.log('Ok Pressed')
                    },
            ])
        } else {
            getPosition()
        }
    }

    return (
        <View>
            <TouchableOpacity style={[styles.button, address ? styles.buttonActived : '']} onPress={onButtonPress}>
                <Icon name="person-pin" size={30} color={Colors.white} />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        marginHorizontal: 3
    },
    buttonActived: {
        backgroundColor: Colors.blue,
    }

})

export default NewEntryAddressPicker
