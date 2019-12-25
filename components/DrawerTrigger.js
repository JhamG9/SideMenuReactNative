import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

class DrawerNavigator extends React.Component {

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.trigger}
                    onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }
                    }>
                    <Image source={require('../assets/menu.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    trigger: {
        marginLeft: 30,

    }


});

export default withNavigation(DrawerNavigator);