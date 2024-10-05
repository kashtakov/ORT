import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <View>
     <View style={styles.header}><Text  style={{color: 'white', fontSize: 30,}}>Стрес</Text></View>
     <View style={{backgroundColor: '#00FFFF', width: 200, hight: 200, borderRadius: 100}}><Text>МЕТА І ЗНАЧЕННЯ</Text></View>
     <Image style={styles.image} source={require('./assets/compass.jpg')} ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
   height: 50,
    marginTop:50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 200,
  },
});
