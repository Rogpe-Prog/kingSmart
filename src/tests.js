import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Test = () => {
    return(
        <View style={styles.container}>
            <Text>TEXTS</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default Test