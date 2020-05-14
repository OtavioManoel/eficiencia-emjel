import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Ambientes() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const [page,setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToNovoAmbiente() {
        navigation.navigate('NovoAmbiente');
    }

    function navigateToDetalhes(incident) {
        navigation.navigate('Detalhes', {incident});
    }

    async function loadIncidents(){
        if (loading){
            return;
        }

        if (total>0 && incidents.length == total){
            return;
        }

        setLoading(true);

        const response = await api.get('incidents',{
            params:{page}
        });
        
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage (page + 1);
        setLoading(false);
    }
    
    useEffect(() => {
        loadIncidents();
    }, [])

    return (
    <View style={styles.container}>
            <View style= {styles.header}>
                <Image source= {logoImg} />

            </View>
            <Text style={styles.bemvindo}>Bem vindo!</Text>
            <Text style={styles.ambientes}>Ambientes:</Text>
            <TouchableOpacity style={styles.newambiente} onPress={navigateToNovoAmbiente}>
            <Text style={styles.novoambiente}>Cadastrar Novo Ambiente</Text>
            </TouchableOpacity>

            <FlatList 
                data= {incidents}
                style={styles.listageral}
                keyExtractor={ambientes => String(ambientes.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem= {({ item: incident})=>(
                    <View style={styles.quadgeral}>
                        <View style= {styles.listaAmbientes1}>
                        <View style={styles.lista1}>
                        <Text style={styles.local}>Local:</Text>
                        <Text style={styles.respLocal}>{incident.environment}</Text>
                        </View>
                        <View style= {styles.listaAmbientes2}>
                        <View style={styles.lista2}>
                        <Text style={styles.descrição}>Área:</Text>
                        <Text style={styles.respDescrição}>{incident.area} m^2</Text>
                        </View>
                        </View>
                        <TouchableOpacity 
                        style= {styles.listaAmbientes3} 
                        onPress={()=>navigateToDetalhes(incident)}
                        >
                                <Feather name="arrow-right" size={16} color="#7D7D7E" />
                                <Text style={styles.infor}>mais informações</Text>
                         </TouchableOpacity>
                         </View>
                    </ View>
                )}
            />
    </ View>
    );
}
