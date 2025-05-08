import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { hp, wp } from '../helpers/common';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import theme from '../constants/theme';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require('../assets/images/welcome.png')}
                style={styles.bgImage}
                resizeMode="cover"
            />
            {/* Linear Gradient */}
            <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
                <LinearGradient
                    colors={['rgba(225, 225, 225, 0)', 'rgba(225, 225, 225, 0.5)', 'white', 'white']}
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0.4 }}
                    end={{ x: 0.5, y: 0.8 }}
                />
                {/* Content */}
                <View style={styles.contentContainer}>
                    <Animated.View entering={FadeInDown.delay(200).duration(600)}>
                        <Text style={styles.title}>Pixels</Text>
                        <Text style={styles.subtitle}>Every Pixel Tells a Story</Text>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(600)}>
                        <Pressable style={styles.startButton}>
                            <Text style={styles.startText}>Get Started</Text>
                        </Pressable>
                    </Animated.View>
                </View>
            </Animated.View>
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
    bgImage: {
        width: wp(100),
        height: hp(100),
        position: 'absolute',
    },
    gradient: {
        width: wp(120),
        height: hp(100),
        position: 'absolute',
        bottom: 0,
        left: -wp(10),
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 14,
        paddingBottom: hp(3),
        width: wp(100),
    },
    title: {
        fontSize: hp(7),
        fontWeight: theme.fontsWeights.bold,
        color: theme.colors.neutral(0.9),
        textAlign: 'center',
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: hp(2),
        fontWeight: theme.fontsWeights.medium,
        color: theme.colors.neutral(0.7),
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 1,
    },
    startButton: {
        marginBottom: 50,
        backgroundColor: theme.colors.neutral(0.9),
        paddingVertical: 15,
        paddingHorizontal: 90,
        borderRadius: theme.radius.xl,
        borderCurve: 'continuous',
        shadowColor: theme.colors.black(0.25),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    startText: {
        color: theme.colors.white(1),
        fontSize: hp(3),
        fontWeight: theme.fontsWeights.medium,
        letterSpacing: 1,
    },
})