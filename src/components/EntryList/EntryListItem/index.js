import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Svg, {Circle, Rect} from 'react-native-svg'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Currency from '../../Core/Currency'
import moment from '../../../vendors/moment'

import Colors from '../../../styles/Colors'

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {

    const bulletLineY = isFirstItem ? 25 : 0
    const bulletLineHeight = isLastItem ? 25 : 50 // 25 : 50
    const showBulletLine = !(isFirstItem && isLastItem)
    const bulletColor = entry.category.color || Colors.white
   console.log('entryY :: ', JSON.stringify(entry.category))

    return (
        <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)}>
            <View style={styles.container}>

                <View style={styles.bullet}>
                    <Svg height="50" width="30">
                        {showBulletLine && (
                            <Rect 
                                x="9"
                                y={bulletLineY}
                                width="1.5"
                                height={bulletLineHeight}
                                fill={Colors.background}
                            />
                        )}

                        <Circle 
                            cx="10"
                            cy="25"
                            r={8}
                            stroke={Colors.background}
                            strokeWidth="1.5"
                            fill={bulletColor}
                        />
                    </Svg>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{entry.description}</Text>
                    
                    <View style={styles.details}>
                        <Icon style={styles.entryAtIcon} name="access-time" size={12} />
                        <Text style={styles.entryAtText}>
                            {moment(entry.entryAt).calendar()}
                        </Text>

                        {entry.address && (
                        <>
                            <Icon style={styles.addressIcon} name="person-pin" size={12} />
                            <Text style={styles.addressText}>{entry.address}</Text>
                        </>
                        )}

                    </View>
                </View>

                <View style={styles.amount}>
                    <Text style={styles.amountText}>
                        <Currency value={entry.amount} />
                    </Text>              
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    bullet: {
        
    },
    description:{
        flex: 1,
        justifyContent: 'center',
    },
    amount: {
        justifyContent: 'center',
    },
    amountText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
    },
    descriptionText: {
        fontSize: 14,
        color: Colors.white,
    },
    details: {
        flexDirection: 'row',
    },
    entryAtIcon: {
        color: Colors.metal,
        marginTop: 2,
        marginRight: 2,
    },
    entryAtText: {
        fontSize: 12,
        color: Colors.metal,
    },
    addressIcon: {
        color: Colors.metal,
        marginTop: 2,
        marginRight: 2,
        marginLeft: 5,
    },
    addressText: {
        fontSize: 12,
        color: Colors.metal,
    },
})

export default EntryListItem