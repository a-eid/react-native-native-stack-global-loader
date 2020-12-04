import * as React from 'react';
import {enableScreens} from 'react-native-screens';
enableScreens();

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function NormalScreen({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('modal')}
        style={{width: 200, height: 70, backgroundColor: 'red'}}
      />
    </View>
  );
}

function ModalScreen({
  value,
}: {
  value: Animated.SharedValue<boolean>;
}): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => (value.value = !value.value)}
        style={{width: 200, height: 70, backgroundColor: 'red'}}
      />
    </View>
  );
}

export default function App() {
  const value = useSharedValue<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="normal" component={NormalScreen} />
        <Stack.Screen
          options={{
            stackPresentation: 'formSheet',
            gestureEnabled: value.value,
          }}
          name="modal"
          getComponent={() => () => <ModalScreen value={value} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
