import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'

import EntryListItem from '../EntryList/EntryListItem'

import {getEntries} from '../../services/Entries'

const EntryList = ({navigation}) => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        async function loadEntries() {
            const data = await getEntries()
            setEntries(data)
        }

        loadEntries()

        console.log('EntryList :: useEffect ')
    }, [])
    
    return (
        <View>
            <Text
                style={styles.title}>Últimos Lançamentos</Text>
            <FlatList
                data={entries}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.entry}>
                            - {item.description} - ${item.amount}
                        </Text>
                        <Button 
                            title={item.id} 
                            onPress={() => 
                                navigation.navigate('NewEntry', {entry: item})
                            }
                        />
                    </View>
                )}
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
    entry: {

    },
})

export default EntryList
