/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from '../app.json';
import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DefaultDarkTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'tomato',
        secondary: 'yellow',
    },
};


function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
