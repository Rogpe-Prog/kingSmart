import React from 'react'
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter'
import Colors from '../../styles/Colors'

import useCategories from '../../hooks/useCategories'

const CategoryModal = ({ categoryType, isVisible, onConfirm, onCancel}) => {
    const [debitCategories, creditCategories, allCategories ] = useCategories()

    return (
        <View>
            <Modal 
                animationType='slide' 
                transparent={false} 
                visible={isVisible} 
            >
                <View style={styles.modal}>
                    <FlatList 
                        data={
                            categoryType === 'all' 
                            ? allCategories 
                            : categoryType === 'debit' 
                            ? debitCategories 
                            : creditCategories
                        }
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity 
                                style={styles.modalItem} 
                                onPress={() => onConfirm(item)}
                                >
                                <Text style={[styles.modalItemText, {color: item.color}]} >{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />

                    <ActionFooter>
                        <ActionPrimaryButton tittle="Fechar" onPress={onCancel} />
                    </ActionFooter>

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    modalItemText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    },

})

export default CategoryModal
