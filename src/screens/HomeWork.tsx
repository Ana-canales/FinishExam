import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

const HomeWork = () => {

    const [tareas, setTareas] = useState('')


    const crearTarea = ()=>{

    }
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={styles.constainer}>
            <TextInput
                style={styles.inputs}
                placeholder="Escriba la tarea por hacer"
                onChangeText={setTareas}
            />
            <Button
                title="Agregar"
                onPress={() => crearTarea()}
            />
            </View>

        </View>
    )
}

export default HomeWork

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#Fbff',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        
    },
    constainer:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 4,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop:20
    }
})
