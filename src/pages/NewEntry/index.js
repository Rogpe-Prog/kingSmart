import React, { useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import ActionFooter, {ActionPrimaryButton, ActionSecondaryButton} from '../../components/Core/ActionFooter'

import BalanceLabel from '../../components/BalanceLabel'
import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'
import NewEntryDatePicker from './NewEntryDatePicker'
import NewEntryAddressPicker from './NewEntryAddressPicker'
import NewEntryCameraPicker from './NewEntryCameraPicker'
import NewEntryDeleteAction from './NewEntryDeleteAction'

import Colors from '../../styles/Colors'

import useEntries from '../../hooks/useEntries'
import { add } from 'react-native-reanimated'

const NewEntry = ({ navigation }) => {

    const entry = navigation.getParam('entry', {
        id: null,
        amount: 0,
        entryAt: new Date(),
        photo: null,
        address: null,  
        latitude: null,
        longitude: null, 
        category: {id: null, name: 'Selecione'},
    })

    const [, saveEntry, deleteEntry] = useEntries()
    
    const [debit, setDebit] = useState(entry.amount <= 0)
    const [amount, setAmount] = useState(entry.amount)
    const [category, setCategory] = useState(entry.category)
    const [entryAt, setEntryAt] = useState(entry.entryAt)
    const [photo, setPhoto] = useState(entry.photo)
    const [address, setAddress] = useState(entry.address)
    const [latitude, setLatitude] = useState(entry.latitude)
    const [longitude, setLongitude] = useState(entry.longitude)

    const isValid = () => {
        if(parseFloat(amount) !== 0){
            return true
        }

        return false
    }
    
    const onSave = () => {
        const data = {
            amount: parseFloat(amount),
            category: category,
            photo: photo,
            address: address,
            latitude: latitude,
            longitude: longitude,
            entryAt: entryAt,
        }
        console.log('NewEntry :: onSave ', data)
        saveEntry(data, entry)
        onClose()
    }

    const onDelete = () => {
        deleteEntry(entry)
        onClose()
    }

    const onClose = () => {
        navigation.goBack()
    }

    return (
        <View style={ styles.container}>
            <BalanceLabel />

            <View style={styles.formContainer}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
                <NewEntryInput 
                    value={amount} 
                    onChangeValue={setAmount} 
                    onChangeDebit={setDebit}
                />

                <NewEntryCategoryPicker 
                    debit={debit} 
                    category={category} 
                    onChageCategory={setCategory} 
                />

                <View style={styles.formActionContainer}>
                    <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
                    <NewEntryCameraPicker photo={photo} onChangePhoto={setPhoto} /> 
                    <NewEntryAddressPicker address={address} onChange={({latitude, longitude, address}) => {
                        setLatitude(latitude)
                        setLongitude(longitude)
                        setAddress(address)
                    }} />
                    <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />
                </View>
                
            </View>
           
            <ActionFooter>
                    <ActionPrimaryButton 
                        tittle={entry.id ? 'Salvar' : 'Adicionar'} 
                        onPress={() => {
                            isValid() && onSave()
                        }}  />
                    <ActionSecondaryButton tittle="Cancelar" onPress={onClose} />
            </ActionFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    formContainer: {
        flex: 1,
        paddingVertical: 20,
    },
    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
})  

export default NewEntry