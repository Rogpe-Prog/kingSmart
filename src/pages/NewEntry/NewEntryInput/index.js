import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

import { TextInputMask } from 'react-native-masked-text'

const NewEntryInput = ({value, onChangeValue}) => {
    return (
        <View>
            <TextInputMask 
                style={styles.input}
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: '',
                }}
                value={value}
                includeRawValueInChangeText={true}
                onChangeText={(maskedValue, rawValue) => {
                    onChangeValue(rawValue)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center',

    },
})

export default NewEntryInput
