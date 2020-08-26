import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {ModalScreen} from './src/modal-screen';
import {NormalScreen} from './src/normal-screen';
import {GlobalLoader} from './src/global-loader';
import {GlobalToast} from './src/global-toast';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalToast>
      <GlobalLoader>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="normal-screen" component={NormalScreen} />
            <Stack.Screen
              name="modal-screen"
              component={ModalScreen}
              options={{
                stackPresentation: 'formSheet',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalLoader>
    </GlobalToast>
  );
}
