import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PetShopButton from './app/src/components/PetShopButton';
import ToastNativeModule from './app/src/AndroidNativeModules/ToastNativeModule';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Vaibhav',
      movie: {},
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <PetShopButton
          buttonName={'Login'}
          container={{backgroundColor: 'green'}}
          Onpress={() => ToastNativeModule.show('Login', 2000)}
        />

        <PetShopButton buttonName={'SignUp'} Onpress={() => alert('Signup')} />
        <PetShopButton
          container={{backgroundColor: 'blue'}}
          Onpress={() => alert('Forget Pass')}
          buttonName={'Forget Pass'}
          textStyle={{color: 'white'}}
        />
        <PetShopButton buttonName={'Logout'} />
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  commonContainer: {
    flex: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  container: {
    backgroundColor: '#DCEAFC',
  },
  container2: {
    backgroundColor: 'green',
  },
  header: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    marginHorizontal: 20,
    color: 'black',
    fontWeight: 'bold',
    borderColor: 'black',
  },
  footer: {
    flex: 2.5,
    justifyContent: 'center',
  },
  scview: {
    flexGrow: 1,
  },
});
