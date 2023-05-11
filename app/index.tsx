import { StyleSheet, Text, View } from "react-native";
import { Appbar, useTheme, withTheme } from 'react-native-paper';
export default function Index() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>
    </View>
  );
}
