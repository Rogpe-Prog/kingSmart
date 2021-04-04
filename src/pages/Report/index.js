import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker'

import EntryLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

const Report = () => {
    return (
        <View style={styles.container}>
            <EntryLabel />
            <View>
                <Picker>
                    <Picker.Item label="Todas Categorias" />
                </Picker>
                <Picker>
                    <Picker.Item label="Últimos 7 dias" />
                </Picker>
            </View>
            <EntrySummary />
            <EntryList />
            <View>
                <Button title="Salvar" />
                <Button title="Fechar" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
})

export default Report

