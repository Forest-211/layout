/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import style from './src/assets/styles/common';
global.style = style;

AppRegistry.registerComponent(appName, () => App);
