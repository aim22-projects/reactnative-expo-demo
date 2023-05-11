import { Slot } from "expo-router";
import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DefaultDarkTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow',
    },
};

export default function Layout() {
    return (
        <PaperProvider theme={theme}>
            <Slot />
        </PaperProvider>
    );
}