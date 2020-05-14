import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 20,
        padding: 26,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    NewLocal: {
        paddingTop: 150,
        paddingBottom: 10,
    },
    tittleLocal: {
        color: '#4682B4',
        fontSize: 15,
        fontWeight: 'bold',
    },
    NomedoLocal: {
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 10,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
    },
    Name: {
        color: '#878889',
        textDecorationLine: 'underline',
    },
    descrição: {
        paddingTop: 15,
        paddingBottom: 15,
    },
   tittleDescrição: {
        color: '#878889',
        paddingTop: 14,
        paddingLeft: 10,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        paddingBottom: 100,
        textDecorationLine: 'underline',
        fontSize: 15,
   },
   equipamentos: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#D4D8DA',
        borderRadius: 8,
   },
   tittleEquipamentos: {
        paddingLeft: 10,
        color: '#878889',
        fontSize: 15,
        textDecorationLine: 'underline',
   },
   containerCadastrar: {
    paddingTop: 15,
   },
   Cadastrar: {
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 8,
        backgroundColor: '#4682B4',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
   },
})