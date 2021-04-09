import {Alert} from 'react-native'
import { getRealm } from './Realm'

export const saveEntry = async (value) => {
    const realm = await getRealm()
    let data = {}
    const {amount} = value

    try {
        realm.write(() => {
            data = {
                id: 'ABCE',
                amount: amount,
                entryAt: new Date(),
                isInit: false,
            }
            realm.create('Entry', data, true)
        })
    
        console.log(
            'saveEntry :: data: ',
            JSON.stringify(data)
        )

    } catch(error) {
        console.error(
            'saveEntry :: error on save object: ',
            JSON.stringify(data)
        )
        Alert.alert('Erro ao salvar os dados de lançamento.')
    }


 

    return data
}