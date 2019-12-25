import { createDrawerNavigator } from 'react-navigation-drawer';

import ScreenTwo from '../screens/ScreenTwo';

import AccountStack from '../navigation/AccountStack';
import DrawerContent from '../components/DrawerContent';

const DrawerNavigator = createDrawerNavigator({
    One: AccountStack,
    Two: ScreenTwo
}, {
    contentComponent: DrawerContent
});

export default DrawerNavigator;