import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,Keyboard,TextInput
} from 'react-native';
import {ActivityIndicator,  Button,Alert,Image,ImageBackground} from 'react-native';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => (
  
  // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <SafeAreaView style={styles.container}>
  <View style={[styles.container,]}>
     <Button
        title="Press me"

        color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/favicon.png')}
      />
    <ActivityIndicator size="small" color="#0000ff" />
    
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        // keyExtractor={item => item.id}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
    // </ImageBackground>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default App