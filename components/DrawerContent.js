import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class DrawerContent extends React.Component {

    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    render() {
        return (
            <SafeAreaView>
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F1%2F6%2F9%2F6%2F8146961-1-eng-GB%2F20140130_titan2.jpg?source=nar-cms' }}/>
                    <Text style={styles.titulo}>¡Hola Jham!, aqui tienes estos items</Text>

                    <View style={styles.screenContainer}>
                        <View style={[styles.screenStyle, (this.props.activeItemKey == 'One') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'One') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('One')}>Screen A</Text>
                        </View>
                        <View style={[styles.screenStyle, (this.props.activeItemKey == 'Two') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'Two') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Two')}>Screen B</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignContent: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    titulo: {
        textAlign: 'center',
        margin: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#eb533a'
    },
    screenContainer: {
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle: {
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    }
});