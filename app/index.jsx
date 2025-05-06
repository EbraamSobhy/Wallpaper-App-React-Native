import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require('../assets/images/welcome.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
            />
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})