import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Appbar, Avatar, Button, Dialog, Divider, List, Portal, Text, useTheme } from 'react-native-paper';
import ScreenPage from "../src/components/Page";
import { useState } from "react";
import { useVisibility } from "../src/hooks/useVisibility";

export default function Index() {
  const theme = useTheme();
  const router = useRouter();

  const [visible, showDialog, hideDialog] = useVisibility();

  return (
    <ScreenPage>
      <AccountDialog visible={visible} hideDialog={hideDialog} />
      <Appbar.Header elevated>
        <Appbar.Content title="Expo Test" />
        <Appbar.Action icon="bell" onPress={() => { }} />
        <Appbar.Action
          animated={false}
          icon={() => <Avatar.Image
            size={24}
            source={require('../assets/man.png')}
          />}
          onPress={() => { showDialog() }} />
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

function AccountDialog(props: { visible: boolean, hideDialog: () => void }) {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.hideDialog} >
        <Text variant="titleLarge" style={{ alignSelf: 'center' }}>Expo Test</Text>
        <List.Item
          title="Test user"
          description="testuser@mail.com"
          left={props => <Avatar.Image
            {...props}
            size={24}
            source={require('../assets/man.png')}
          />}
        />
        <Divider />
        <List.Section>
          <List.Item
            title="Action 1"
            onPress={() => { }}
            left={props => <List.Icon icon="plus" {...props} />}
          />
          <List.Item
            title="Action 2"
            onPress={() => { }}
            left={props => <List.Icon icon="plus" {...props} />}
          />
        </List.Section>
      </Dialog>
    </Portal>);
}