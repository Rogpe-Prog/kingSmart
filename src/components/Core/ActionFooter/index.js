import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import Colors from '../../../styles/Colors'

const ActionFooter = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                {children}
            </View>
        </View>
    )
}

export const ActionPrimaryButton = ({tittle, onPress}) => {
    return(
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <Text style={styles.primaryButtonText}>{tittle}</Text>
        </TouchableOpacity>
    )
}

export const ActionSecondaryButton = ({tittle, onPress}) => {
    return(
        <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
            <Text style={styles.secondaryButtonText}>{tittle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    primaryButton: {
        borderRadius: 150,
        borderWidth: 1,
        borderColor: Colors.green,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    primaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.green,
    },
    secondaryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    secondaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.white,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

export default ActionFooter
