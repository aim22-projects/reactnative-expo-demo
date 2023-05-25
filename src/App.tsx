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

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : theme}>
      {/* children */}
    </PaperProvider>
  );
}

export default App;
