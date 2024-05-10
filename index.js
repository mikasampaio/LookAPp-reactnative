import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Feed from './src/pages/Feed';
import Routes from './src/routes';

AppRegistry.registerComponent(appName, () => Routes);
