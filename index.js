import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import Feed from './src/pages/Feed';

AppRegistry.registerComponent(appName, () => Feed);
