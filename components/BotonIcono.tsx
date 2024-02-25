import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BotonIconoProps {
  onPress: () => void;
  icono: string;
  texto: string;
}

const BotonIcono: React.FC<BotonIconoProps> = ({ onPress, icono, texto }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Icon name={icono} size={24} color="#ffffff" style={styles.icono} />
      {/* <Text style={styles.texto}>{texto}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 20,
  },
  icono: {
    marginRight: 8,
  },
  // texto: {
  //   color: '#ffffff',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});

export default BotonIcono;