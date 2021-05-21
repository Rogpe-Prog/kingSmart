import React, { useState } from 'react'
import { View, Modal, StyleSheet, Alert } from 'react-native'

import { RNCamera } from 'react-native-camera'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../../styles/Colors'

const NewEntryCameraPickerModal = ({ photo, isVisible, onChangePhoto, onDelete, onClose }) => {
    const [camera, setCamera] = useState()
    const [turncamera, setTurnCamera] = useState(RNCamera.Constants.Type.back)

    
    const onTakePicture = async () => {
        try {
            const {uri} = await camera.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true,
            })
            onChangePhoto(uri)
        } catch(error){
            console.log('NewEntryCameraPickerModal :: onTakePicture ' + error)
        }
        Alert.alert('Erro', 'Houve um erro ao tirar a foto.')
    }


    
    
    const onTurnCamera = () => {
        if (turncamera === RNCamera.Constants.Type.back){
            setTurnCamera(RNCamera.Constants.Type.front)
        } else {
            setTurnCamera(RNCamera.Constants.Type.back)
        }
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
            >
                <RNCamera
                    ref={ref => setCamera(ref)}
                    style={styles.camera}
                    type={turncamera}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                        title: "Permissão para usar a câmera",
                        message: 'Precisamos da sua permissão para usar a câmera.',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancelar',
                    }}
                    captureAudio={false}
                >
                    <Icon 
                        name="photo-camera" 
                        size={40} 
                        color={Colors.white} 
                        onPress={onTakePicture} 
                        style={styles.buttonTakePicture}
                    />
                    <Icon 
                        name="flip-camera-android" 
                        size={40} 
                        color={Colors.white} 
                        onPress={onTurnCamera} 
                        style={styles.buttonTurnCamera}
                    />
                    <Icon 
                        name="close" 
                        size={50} 
                        color={Colors.white}
                        onPress={onDelete}
                        style={styles.buttonDeletePicture}

                    />

                </RNCamera>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
    },
    buttonTakePicture: {
        flex: 0,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonTurnCamera: {
        flex: 0,
        alignSelf: 'flex-start',
        position: 'absolute',
        bottom: 20,
        marginLeft: 10,
    },
    buttonDeletePicture: {
        flex: 0,
        position: 'absolute',
        top: 20,
        right: 20,
    },
})

export default NewEntryCameraPickerModal
