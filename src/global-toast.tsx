import * as React from 'react';
import {View} from 'react-native';
import A from 'react-native-reanimated';

// @ts-ignore
const Context = React.createContext({});

export class GlobalToast extends React.Component {
  value = {};

  render() {
    const {children} = this.props;
    return (
      <Context.Provider value={this.value}>
        {/*  */}
        {/*  */}
        {children}
      </Context.Provider>
    );
  }
}
