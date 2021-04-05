import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import BalancePanelLabel from '../BalancePanel/BalancePanelLabel'
import BalancePanelChart from '../BalancePanel/BalancePanelChart'

const BalancePanel = ({currentBalance}) => {
    return (
        <View style={styles.container}>
            <BalancePanelLabel currentBalance={currentBalance} />
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
