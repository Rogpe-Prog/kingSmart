import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import EntryListItem from '../EntryList/EntryListItem'

const EntryList = () => {
    return (
        <View>
            <Text
                style={styles.title}>Últimos Lançamentos</Text>
            <FlatList
                data={[
                {key: 'Padaria Asa Branca EntryList: $10'},
                {key: 'Supermercado Isadora EntryList: $190'},
                {key: 'Posto Ipiranga EntryList: $190'}
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            ></FlatList>
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
      },
})

export default EntryList
