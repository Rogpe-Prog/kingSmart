import React, { useEffect } from 'react'
import { ActivityIndicator, StatusBar, View, StyleSheet, LogBox } from 'react-native'

import { isInitialized } from '../../services/Welcome'

import Colors from '../../styles/Colors'

const Loading = ({ navigation }) => {
    LogBox.ignoreAllLogs()
    useEffect(() => {
        async function makeRedirect() {
            (await isInitialized())
                ? navigation.navigate('Main')
                : navigation.navigate('Welcome')
        }

        makeRedirect()
    }, [])

    return (
        <View style={styles.conatiner}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
            <ActivityIndicator color={Colors.blueDark} size={60} />
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Loading
