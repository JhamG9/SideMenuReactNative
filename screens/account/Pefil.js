import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';

import Header from '../../components/Header';
function Perfil(props) {
    const navigation = props.navigation;
    return (
        <View>
            <Header/>
            <View>
                <Text>Hola desde perfil</Text>
                <Button
                    title="Press me"
                    onPress={() => navigation.navigate("Registro")} />
            </View>
        </View>

    )
}

export default withNavigation(Perfil);