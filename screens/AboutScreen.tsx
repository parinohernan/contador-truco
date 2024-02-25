import { Text, View, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Contador de Truco.
        Esta aplicacion es construida por hernanPa para uso ludico.
        Recuerda 3 cosas:
        
      </Text>
      <Text style={styles.paragraph}>
        
        Recuerda 3 cosas:
        "DIVERTIRTE"
        "FAIR PLAY"
        "COMPARTI"
      </Text>
      <Image style={styles.logo} source={require('../assets/adaptive-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});