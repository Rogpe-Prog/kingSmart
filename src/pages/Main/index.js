import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

const Main = ({ navigation }) => {
    const currentBalance = 2064.36

    const entriesGrouped = [
        {key: '1', description: 'Alimentação', amount: 200 },
        {key: '2', description: 'Combustível',  amount: 12 },
        {key: '3', description: 'Aluguel', amount: 120 },
        {key: '4', description: 'Lazer', amount: 250 },
        {key: '5', description: 'Outros', amount: 1200 }
        ]

    return (
        <View style={styles.container}>
           <BalancePanel  currentBalance={currentBalance} />
           <Button 
                title='+' 
                onPress={() => navigation.navigate('NewEntry')} 
            />
           <EntrySummary entriesGrouped={entriesGrouped} />
           <EntryList navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 10,
        //backgroundColor: '#DDD'
    },
});

export default Main;