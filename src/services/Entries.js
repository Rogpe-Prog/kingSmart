import {Alert} from 'react-native'

import moment from '../../src/vendors/moment'

import { getRealm } from './Realm'
import {getUUID} from '../services/UUID'

export const getEntries = async (days, category) => {
    let realm = await getRealm()

    realm = realm.objects('Entry')

    if(days > 0){
        const date = moment().subtract(days, 'days').toDate()

        realm = realm.filtered('entryAt >= $0', date)
    }

    if(category && category.id) {
        realm = realm.filtered('category == $0', category)
    }

    const entries = realm.sorted('entryAt', true)

    console.log("getEntries :: entries ", JSON.stringify(entries))

    return entries
}

export const saveEntry = async (value, entry = {}) => {
    const realm = await getRealm()
    let data = {}
    const {amount} = value

    try {
        realm.write(() => {
            data = {
                id: value.id || entry.id || getUUID(),
                amount: value.amount || entry.amount || 0,
                entryAt: value.entryAt || entry.entryAt || new Date(),
                description: value.category.name,
                photo: value.photo,
                address: value.address || entry.address,
                latitude: value.latitude || entry.latitude,
                longitude: value.longitude || entry.longitude,
                isInit: value.isInit || false,
                category: value.category || entry.category,
            }
            realm.create('Entry', data, true)
        })
    
        console.log('saveEntry :: data: ', JSON.stringify(data))

    } catch(error) {
        console.error(
            'saveEntry :: error on save object: ',
            JSON.stringify(data)
        )
        Alert.alert('Erro ao salvar os dados de lançamento.')
    }
    return data
}

export const deleteEntry = async (entry) => {
    const realm = await getRealm()

    try {
        realm.write(() => {
            realm.delete(entry)
        })
    } catch(error) {
        console.error(
            'deleteEntry :: error on delete object: ',
            JSON.stringify(entry)
        )
        Alert.alert('Erro ao excluir este lançamento.')
    }
}