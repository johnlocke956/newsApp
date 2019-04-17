import { 
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import WelcomePage from '../screens/Auth/WelcomePage';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

import DashboardNavigator from './DashboardNavigator';

const AuthRoutes = createStackNavigator({
  Welcome: WelcomePage,
  Login: SignIn,
  Register: SignUp,
});

const DashboardRoutes = DashboardNavigator;

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthRoutes,
    Dashboard: DashboardRoutes
  },
  {
    initialRouteName: 'Auth'
  }
));
