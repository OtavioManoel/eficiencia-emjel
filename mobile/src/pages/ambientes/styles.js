import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: Contants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bemvindo: {
        fontSize: 17,
        marginTop: 4,
        lineHeight: 16,
        fontStyle: "normal",
        textDecorationLine: "underline",
        color: '#4682B4',

    },
    ambientes: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 9,
        lineHeight: 16,
        fontStyle: "normal",
        textDecorationLine: "underline",
        color: '#4682B4',
    },
    quadgeral: {
        padding: 13,
        borderRadius: 8,
        backgroundColor: '#D4D8DA',
        marginTop: 6,
        marginBottom: 6,
    },
    local: {
        fontSize: 14,
        lineHeight: 16,
        color: '#4682B4',
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    respLocal: {
        color: '#878889',
        lineHeight: 16,
        fontSize: 14,
    },
    respDescrição: {
        color: '#878889',
        lineHeight: 16,
        fontSize: 14,
    },
    descrição: {
        fontSize: 14,
        lineHeight: 16,
        color: '#4682B4',
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    infor: {
        fontSize: 14,
        color: '#4682B4',
        textDecorationLine: "underline",
    },
    lista1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lista2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaAmbientes3: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems:'center',
    },
    novoambiente: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4682B4',
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 6,
    },
});