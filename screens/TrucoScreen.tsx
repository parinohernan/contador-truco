import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import BotonIcono from '../components/BotonIcono'; 
import Marcador from "../components/Marcador";
import FinPartida from './FinPartida';

export default function Truco() {
  const [puntosNosotros, setPuntosNosotros] = useState(0);
  const [puntosEllos, setPuntosEllos] = useState(28);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ganador, setGanador] = useState("");

  const sumarPunto = (equipo: 'nosotros' | 'ellos') => {
    if (equipo === 'nosotros') {
      if (puntosNosotros === 29) {
        setGanador ("Nosotros")
        setMostrarModal(true);
      }
      setPuntosNosotros(puntosNosotros + 1);
    } else {
      if (puntosEllos === 29) {
        setGanador ("Ellos")
        setMostrarModal(true);
      }
      setPuntosEllos(puntosEllos + 1);
    }
  };

  const restarPunto = (equipo: 'nosotros' | 'ellos') => {
    if (equipo === 'nosotros' && puntosNosotros > 0) {
      setPuntosNosotros(puntosNosotros - 1);
    } else if (equipo === 'ellos' && puntosEllos > 0) {
      setPuntosEllos(puntosEllos - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Truco</Text>
      <View >
        <Button title="Resetear Marcador" onPress={() => { setPuntosNosotros(0); setPuntosEllos(0); }} />
      </View>
      <View style={styles.seccionesContainer}>
        <View style={[styles.seccion, styles.bordeDerecho]}>
          <Text style={styles.equipoText}>Nosotros:</Text>
        <View style={styles.buttonsContainer}>
            <BotonIcono
              onPress={() => restarPunto('nosotros')}
              icono="remove"
              texto="Restar Punto"
            />
            <BotonIcono
              onPress={() => sumarPunto('nosotros')}
              icono="add"
              texto="Sumar Punto"
            />
        </View>
          <Marcador
            puntos={puntosNosotros}
          />
        </View>
        <View style={styles.separador}>

        </View>
        <View style={styles.seccion}>
          <Text style={styles.equipoText}>Ellos:</Text>
          <View style={styles.buttonsContainer}>
            <BotonIcono
              onPress={() => restarPunto('ellos')}
              icono="remove"
              texto="Restar Punto"
            />
            <BotonIcono
              onPress={() => sumarPunto('ellos')}
              icono="add"
              texto="Sumar Punto"
            />

        </View>
          <Marcador
            puntos={puntosEllos}
          />
        </View>
      </View>
      <Text style={styles.footer}>Desarrollado por hernanpa</Text>
      
      {/* modal de fin de partida */}
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={mostrarModal}
        onRequestClose={() => {
          setMostrarModal(!mostrarModal);
        }}
      >
        <FinPartida 
          ganador={ganador} 
          puntosNosotros={puntosNosotros} 
          puntosEllos={puntosEllos} 
          onPress={() => setMostrarModal(!mostrarModal)}
        />
      </Modal>
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