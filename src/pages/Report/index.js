import React, {useState} from 'react'
import { View, TouchableOpacity, ScrollView, StyleSheet, LogBox, Text, StatusBar } from 'react-native'

import Colors from '../../styles/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import ActionFooter, {ActionPrimaryButton} from '../../components/Core/ActionFooter'

import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'
import RelativeDaysModal from '../../components/RelativeDaysModal'
import CategoryModal from '../../components/CategoryModal'

const Report = ({navigation}) => {
    LogBox.ignoreAllLogs() //BSON Yellow and VirtualizedList Red
    
    const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false)
    const [categoryModalVisible, setCategoryModalVisible] = useState(false)
    const [relativeDays, setRelativeDays] = useState(7)
    const [category, setcategory] = useState({id: null, name: 'Todas Categorias'})

    const onRelativeDaysPress = item => {
        setRelativeDays(item)
        onRelativeDaysClosePress()
    }

    const onCategoryPress = item => {
        setcategory(item)
        onCategoryClosePress()
    }
    
    const onRelativeDaysClosePress = () => {
        setRelativeDaysModalVisible(false)

    }

    const onCategoryClosePress = () => {
        setCategoryModalVisible(false)
    }



    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
            <BalanceLabel />
            <View style={styles.filtersContainer}>
                <TouchableOpacity 
                    style={styles.filterButton}
                    onPress={() => {setRelativeDaysModalVisible(true)}}
                >
                    <Text style={styles.filterButtonText}>Últimos {relativeDays} dias</Text>
                    <Icon name="keyboard-arrow-down" size={30} color={Colors.champagneDark} />
                </TouchableOpacity>
                <RelativeDaysModal 
                    isVisible={relativeDaysModalVisible}  
                    onConfirm={onRelativeDaysPress}
                    onCancel={onRelativeDaysClosePress}
                />

                <TouchableOpacity 
                    style={styles.filterButton}
                    onPress={() => setCategoryModalVisible(true)}
                >
                    <Text style={styles.filterButtonText}>{category.name}</Text>
                    <Icon name="keyboard-arrow-down" size={30} color={Colors.champagneDark} />
                </TouchableOpacity>

                <CategoryModal 
                    categoryType="all" 
                    isVisible={categoryModalVisible}
                    onConfirm={onCategoryPress}
                    onCancel={onCategoryClosePress}
                />


            </View>
           
           <ScrollView>
                <EntrySummary days={relativeDays}  />
                <EntryList days={relativeDays} category={category} />
           </ScrollView>
           
            <ActionFooter>
                <ActionPrimaryButton
                    tittle="Fechar"
                    onPress={() => navigation.goBack()} />
            </ActionFooter>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    filterButton: {
        flexDirection: 'row',
        borderColor: Colors.champagneDark,
        borderWidth: 1,
        borderRadius: 150,
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },  
    filterButtonText: {
        color: Colors.champagneDark,

    },  
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

export default Report

