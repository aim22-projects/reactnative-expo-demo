import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Appbar, Avatar, List, useTheme } from 'react-native-paper';
import ScreenPage from "../src/components/Page";

export default function Index() {
  const theme = useTheme();
  const router = useRouter();

  // useEffect(() => {
  //   router.push("videos/");
  // }, []);

  return (
    <ScreenPage>
      <Appbar.Header elevated>
        <Appbar.Content title="Expo Test" />
        <Appbar.Action icon="bell" onPress={() => { }} />
        <Appbar.Action
          icon={() => <Avatar.Image
            size={24}
            source={require('../assets/man.png')}
          />}
          onPress={() => { }} />
      </Appbar.Header>
      <ScrollView>
        <List.Section>
          <List.Subheader>Test Pages</List.Subheader>
          <List.Item
            title="Videos List"
            onPress={() => router.push("videos")}
            left={props => <List.Icon icon="playlist-play" {...props} />}
          />
          <List.Item
            title="Video Play"
            onPress={() => router.push({ pathname: "videos/play", params: { id: 3 } })}
            left={props => <List.Icon icon="video" {...props} />}
          />
          <List.Item
            title="Notifications"
            onPress={() => router.push("notifications")}
            left={props => <List.Icon icon="bell" {...props} />}
          />
          <List.Item
            title="Deep Linking"
            onPress={() => router.push("deeplinks")}
            left={props => <List.Icon icon="link-variant" {...props} />}
          />
        </List.Section>
      </ScrollView>
    </ScreenPage>
  );
}
