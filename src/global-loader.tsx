import * as React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import A from 'react-native-reanimated';
import {withTransition} from 'react-native-redash';

// @ts-ignore
const Context = React.createContext({});

export class GlobalLoader extends React.Component {
  aniamtionValue = new A.Value<0 | 1>(0);
  transition = withTransition(this.aniamtionValue);
  pointerEvents = A.cond(this.transition, 'auto', 'none');

  style: StyleProp<A.AnimateStyle<ViewStyle>> = {
    opacity: A.interpolate(this.transition, {
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  startLoader = () => this.aniamtionValue.setValue(1);
  stopLoader = () => this.aniamtionValue.setValue(0);

  value = {
    startLoader: this.startLoader,
    stopLoader: this.stopLoader,
  };

  render() {
    const {children} = this.props;
    return (
      <Context.Provider value={this.value}>
        {children}
        <A.View
          style={[styles.container, this.style]}
          pointerEvents={this.pointerEvents}>
          <ActivityIndicator size="large" color="white" />
        </A.View>
      </Context.Provider>
    );
  }
}

export function useGlobalLoader(): {
  stopLoader: () => void;
  startLoader: () => void;
} {
  // @ts-ignore
  return React.useContext(Context);
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
