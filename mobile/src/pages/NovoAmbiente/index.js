import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TextInput } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from '../NovoAmbiente/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function NovoAmbiente() {
    const navigation = useNavigation();
    const [value, onChangeText] = React.useState('Nome do Local')
    const [value1, onChangeText1] = React.useState('Descrição do Local')
    const [value2, onChangeText2] = React.useState('Equipamentos eletroeletrônicos e o número')

    function navigateToAmbientes() {
        navigation.navigate('Ambientes')
    } 

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateToAmbientes}>
                    <Feather name="arrow-left" size={28} color="#4682B4" />
                </TouchableOpacity>
            </View>
            <View style={styles.NewLocal}>
                <Text style={styles.tittleLocal}>Cadastre um Novo Local: </Text>
            </View>
            <View style={styles.NomedoLocal}>
                <TextInput style={styles.Name} onChangeText={text=> onChangeText(text)} value={value} />
            </View>
            <View style={styles.descrição}>
                <TextInput style={styles.tittleDescrição} onChangeText={text=> onChangeText1(text)} value={value1} />
            </View>
            <View style={styles.equipamentos}>
                <TextInput style={styles.tittleEquipamentos} onChangeText={text=> onChangeText2(text)} value={value2} />
            </View>
            <View style={styles.containerCadastrar}>
                 <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.Cadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
