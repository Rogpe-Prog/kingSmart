import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import EntrySummaryChart from '../EntrySummary/EntrySummaryChart'
import EntrySummaryList from '../EntrySummary/EntrySummaryList'

const EntrySummary = () => {
    return (
        <View style={styles.container}>
            <EntrySummaryChart />
            <EntrySummaryList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },

})


export default EntrySummary
