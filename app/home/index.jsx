import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import theme from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const HomeScreen = () => {
    const {top} = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 10 : 30;
    const [search, setSearch] = useState('');

    return (
        <View style={[styles.container, {paddingTop}]}>
            {/* header */}
            <View style={styles.header}>
                <Pressable>
                    <Text style={styles.title}>
                        Pixels
                    </Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6 name="bars-staggered" size={22} color={theme.colors.neutral(0.7)} />
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={{gap:15}}>
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
                    </View>
                    <TextInput
                    placeholder='Search for photos...'
                    value={search}
                    onChangeText={ value => setSearch(value) }
                    style={styles.searchInput}
                    />
                    {
                        search && (
                            <Pressable style={styles.closeIcon} onPress={() => setSearch('')}>
                                <Ionicons name='close' style={styles.closeIcon} size={24} color={theme.colors.neutral(0.6)} />
                            </Pressable>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
    },
    header: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: hp(4),
        fontWeight: theme.fontsWeights.bold,
        color: theme.colors.neutral(0.9),
    },
    searchBar:{
        marginHorizontal: wp(4),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        padding: 6,
        paddingLeft: 10,
        borderRadius: theme.radius.lg,
    },
    searchIcon: {
        padding: 8
    },
    searchInput: {
        flex: 1,
        borderRadius: theme.radius.sm,
        fontSize: hp(1.8),
        paddingVertical: 10,
    },
    closeIcon: {
        backgroundColor: theme.colors.neutral(0.1),
        padding: 8,
        borderRadius: theme.radius.sm,
    }
})