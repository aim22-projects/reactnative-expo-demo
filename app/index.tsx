import { StyleSheet, Text, View } from "react-native";
import { Appbar, useTheme, withTheme } from 'react-native-paper';
import ScreenPage from "../src/components/Page";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
export default function Index() {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    router.replace("videos/");
  }, []);

  return (
    <ScreenPage>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>
      <Link href="videos/">Videos</Link>
    </ScreenPage>
  );
}
