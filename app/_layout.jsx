import { Stack } from 'expo-router';

const layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="home/index"
                options={{ headerShown: false }}
            />
        </Stack>
    )
}

export default layout