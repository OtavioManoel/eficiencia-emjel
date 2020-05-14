import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from '../detalhes/styles';

export default function Detalhes() {

    const navigation= useNavigation ();
    const route = useRoute();

    const incident =  route.params.incident;

    function navigateToAmbientes() {
        navigation.navigate('Ambientes');
    }

    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateToAmbientes                                                                                                                    }>
                    <Feather name="arrow-left" size={28} color="#4682B4" />
                </TouchableOpacity>
            </View>

            <View style={styles.inforLocal}>
                <Text style={styles.infoLocal}>Informações do Local: </Text>
            </View>
            <View style={styles.NomeLocal}>
                <Text style={styles.tittleNome}>Nome do local: </Text>
                <Text style={styles.respNomeLocal}>{incident.environment}</Text>
            </View>
            <View style={styles.DescriçãoDet}>
                <Text style={styles.DescriçãoDetalhes}>Equipamentos eletroeletrônicos: </Text>
                <Text style={styles.respDescriçãoDet}>{incident.electronicEquipment}</Text>
            </View>
            <View style={styles.Equipamentos}>
                <Text style={styles.EquipamentoEletro}>Área:</Text>
                <Text style={styles.respEquipamentoEletro}>{incident.area} m^2</Text>
            </View>
            <View style={styles.tittleContato}>
                <Text style={styles.entreContato}>Entre em contato com a EMJEL</Text>
            </View>
            <View style={styles.contato}>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.email}>E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>    
                    <Text style={styles.telefone}>Telefone</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
