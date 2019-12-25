import  {createStackNavigator} from 'react-navigation-stack'
import Perfil from '../screens/account/Pefil';
import Registro from '../screens/account/Registro';

export const AccountStack = createStackNavigator({
    Perfil: {
        screen: Perfil,
        navigationOptions: () =>({
            header: null,
            headerLeft : null,
        headerRight: null,
        })
    },
    Registro: {
        screen: Registro,
        navigationOptions: () =>({
            title: 'Registro'
        })
    },
},{headerMode: 'screen'}
);

export default AccountStack;