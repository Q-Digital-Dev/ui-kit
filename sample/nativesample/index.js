/**
 * @format
 */

import { AppRegistry, Appearance } from 'react-native';
import { name as appName } from './app.json';
import Router from '~app/router/router';

Appearance.setColorScheme('light')

AppRegistry.registerComponent(appName, () => Router);
