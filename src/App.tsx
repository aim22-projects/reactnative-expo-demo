import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    secondary: 'yellow',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    secondary: 'yellow',
  },
};


const AppNavigator = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : theme}>
      <NavigationContainer>
        {/* children */}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
