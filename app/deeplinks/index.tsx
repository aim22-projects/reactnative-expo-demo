import { Appbar, Button, IconButton, List, Text, TextInput } from "react-native-paper";
import ScreenPage from "../../src/components/Page";
import { useRouter } from "expo-router";
import * as Clipboard from 'expo-clipboard';
import { deeplinksList } from '../../src/repositories/deeplinks';
import AppbarBackAction from "../../src/components/AppbarBackAction";

export default function NotificationsPage() {
    const router = useRouter();
    return (
        <ScreenPage>
            <Appbar.Header elevated>
                <AppbarBackAction />
                <Appbar.Content title="Deep Linking" />
            </Appbar.Header>
            <List.Section style={{ padding: 4 }}>
                <List.Subheader>Open this app with below deep links</List.Subheader>
                {
                    deeplinksList.map((link, index) => (
                        <TextInput
                            mode="outlined"
                            key={index}
                            value={link}
                            focusable={false}
                            editable={false}
                            multiline
                        // right={
                        //     <TextInput.Icon
                        //         icon="content-copy"
                        //         onPress={() => Clipboard.setStringAsync(link)}
                        //         forceTextInputFocus={false}
                        //     />
                        // }
                        />
                    ))
                }
            </List.Section>
        </ScreenPage>
    );
}
