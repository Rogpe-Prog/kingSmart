import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import BalancePanelLabel from '../BalancePanel/BalancePanelLabel'
import BalancePanelChart from '../BalancePanel/BalancePanelChart'

const BalancePanel = () => {
    return (
        <View style={styles.container}>
            <BalancePanelLabel />
            <BalancePanelChart />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
})

export default BalancePanel
