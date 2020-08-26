import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as React from 'react';
import {useGlobalLoader} from './global-loader';

export function ModalScreen({navigation}: any) {
  const loader = useGlobalLoader();
  function handleToHomePress() {
    navigation.navigate('normal-screen');
  }

  function handleTiggerLoaderPress() {
    loader.startLoader();
    setTimeout(() => {
      loader.stopLoader();
    }, 5000);
  }

  function handleTriggerToastPress() {}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Modal screen</Text>

      <TouchableOpacity style={styles.button} onPress={handleToHomePress}>
        <Text>To Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleTiggerLoaderPress}>
        <Text>Trigger Loader</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleTriggerToastPress}>
        <Text>Trigger Toast</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {fontSize: 22},
  button: {padding: 20},
});
