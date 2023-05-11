import { StyleSheet, Text, View } from "react-native";
import { Appbar, useTheme, withTheme } from 'react-native-paper';
import ScreenPage from "../src/components/Page";
import { Link } from "expo-router";
export default function Index() {
  const theme = useTheme();
  return (
    <ScreenPage>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>
      <Link href="videos/">Videos</Link>
    </ScreenPage>
  );
}
