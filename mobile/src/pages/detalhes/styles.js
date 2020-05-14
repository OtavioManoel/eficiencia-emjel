import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 26,
        flex: 1,
    },
    headers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoLocal: {
        paddingTop: 150,
        color: '#4682B4',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    NomeLocal: {
        paddingTop: 19,
        paddingBottom: 19,
        paddingLeft: 13,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        marginTop: 15,
        marginBottom: 20,

    },
    tittleNome: {
        color: '#4682B4',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    respNomeLocal: {
        color: '#878889',
        fontSize: 15,
    },
    DescriçãoDet: {
        paddingTop: 19,
        paddingLeft: 13,
        paddingBottom: 19,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        marginBottom: 20,
    },
    DescriçãoDetalhes: {
        color: '#4682B4',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    respDescriçãoDet: {
        color: '#878889',
        fontSize: 15,
    },
    Equipamentos: {
        paddingTop: 19,
        paddingLeft: 13,
        paddingBottom: 19,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
    },
    EquipamentoEletro: {
        color: '#4682B4',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    respEquipamentoEletro: {
        color: '#878889',
        fontSize: 15,
    },
    entreContato: {
        color: '#4682B4',
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 175,
        marginBottom: 10,
    },
    contato: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    email: {
        paddingHorizontal: 66,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 8,
        backgroundColor: '#4682B4',
        color: '#fff',
    },
    telefone: {
        paddingHorizontal: 58,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
        fontWeight: 'bold',
        backgroundColor: '#4682B4',
        color: '#fff',
    },
})