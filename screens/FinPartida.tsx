import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function FinPartida({ ganador, puntosEllos, puntosNosotros, onPress }) {
  return (
     <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Fin del partido</Text>
            <Text style={styles.modalText}>GANADOR !!! {ganador}</Text>
            <Text style={styles.modalText}>
              Detalle del marcador:
              {'\n'}Nosotros: {puntosNosotros}
              {'\n'}Ellos: {puntosEllos} 
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onPress()}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View> 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212', // Cambiado a un color oscuro
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
      color: '#ffffff', // Cambiado a blanco para mayor contraste
    },
    seccionesContainer: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      width: '100%',
      padding: '10%'
    },
    texto: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    separador: {
      flex: 1,
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#ffffEE',
      borderRadius: 5,
      maxWidth: "2%",
    },
    seccion: {
      flex: 1,
      alignItems: 'center',
    },
  
    bordeDerecho: {
      borderRightWidth: 0, // Quitado el borde derecho de la primera sección
    },
    equipoText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#ffffff', // Cambiado a blanco para mayor contraste
    },
    puntosText: {
      fontSize: 16,
      color: '#ffffff',
      marginBottom: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    button: {
      backgroundColor: '#1976D2', // Cambiado a azul oscuro
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    footer: {
      position: 'absolute',
      bottom: 20,
      fontSize: 14,
      color: '#ffffff', // Cambiado a blanco para mayor contraste
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: '#121272',
      borderRadius: 10,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 18,
      color: '#ffffff',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });