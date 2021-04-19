
import 'react-native-get-random-values'

export const getUUID = () => {
    const uuidv1 = require('uuid/v1')
    return uuidv1()
}

// import { v4 as uuid } from 'uuid'
// console.log(uuid())