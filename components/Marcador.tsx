// Importamos React y useState
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Definimos la interfaz para las props
interface MarcadorProps {
  puntos: number;
}

// Definimos el componente Marcador
const Marcador: React.FC<MarcadorProps> = ({ puntos }) => {
  // Calculamos los puntos formateados
  let puntosFormateados: string = `Malas: ${puntos % 15}`;
  if (puntos === 15) {
    puntosFormateados = `Buenas: 0`;
  } else if (puntos === 30) {
    puntosFormateados = `Buenas: 15`;
  } else if (puntos > 15) {
    puntosFormateados = `Buenas: ${puntos % 15}`;
  }

  // Calculamos la cantidad de atados completos
  const atadosCompletos = Math.floor((puntos % 15) / 5);

  // Calculamos la cantidad de palitos sueltos
  const palitosSueltos = puntos % 5;

  // Función para generar un atado de palitos
  const generarAtado = () => {
    // return <Text style={styles.texto}>|</Text>;
    return <Image style={styles.atadoImg} source={require('../assets/fosforos5.png')} />
  };

  // Función para generar palitos sueltos
  const mostrarPalitos =  (cantidad: number) => {
    let representacion: JSX.Element;
  
    switch (cantidad) {
    case 1:
        representacion = <Image style={styles.atadoImg} source={require('../assets/fosforos1.png')} />;
        break;
    case 2:
        representacion = <Image style={styles.atadoImg} source={require('../assets/fosforos2.png')} />;
        break;
    case 3:
        representacion = <Image style={styles.atadoImg} source={require('../assets/fosforos3.png')} />;
        break;  
    case 4:
        representacion = <Image style={styles.atadoImg} source={require('../assets/fosforos4.png')} />;
    break;
        default:
        representacion = <Image style={styles.atadoImg} source={require('../assets/fosforos0.png')} />;
        break;
    }
  
    return representacion;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.texto}>{puntosFormateados}</Text>
      </View>
      <View style={styles.atadosContainer}>
        {/* Mostramos los atados completos */}
        {Array(atadosCompletos).fill(null).map((_, index) => (
          <View key={index}>{generarAtado()}</View>
        ))}
        {/* Mostramos los palitos sueltos */}
        {mostrarPalitos(palitosSueltos)}
      </View>
    </View>
  );
};

// Definimos los estilos

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  atadosContainer: {
    flexDirection: 'column',
  },
  atado: {
    marginRight: 5,
  },
  palitosSueltosContainer: {
    flexDirection: 'row',
  },
  texto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  atadoImg: {
    height: 80,
    width: 80,
  }

});

export default Marcador;



// import React from 'react';
// import { StyleSheet, TouchableOpacity, Text } from 'react-native';

// interface MarcadorProps {
//   puntos: number;
// }

// const Marcador: React.FC<MarcadorProps> = ({ puntos }) => {
//     let puntosFormateados :string= `Malas: ${puntos % 15}`;
//     if (puntos === 15) {
//         puntosFormateados = `Malas: ${puntos}`;
//     }else if (puntos === 30) {
//             puntosFormateados = `Buenas: 15`;
//         } else if (puntos > 15) {
//             puntosFormateados = `Buenas: ${puntos % 15}`;
//         }

//     return ( 
//       <Text style={styles.texto}>{puntosFormateados}</Text> 
//   );
// };

// const styles = StyleSheet.create({

//   texto: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Marcador;