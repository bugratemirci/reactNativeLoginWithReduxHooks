/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Index from './src/Index';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './src/redux/reducers/configureStore';
const store = configureStore();
const App = () => (
    <Provider store={store}>
        <Index />
    </Provider>

)

AppRegistry.registerComponent(appName, () => App);
