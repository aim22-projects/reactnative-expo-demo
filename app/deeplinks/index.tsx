import * as Clipboard from 'expo-clipboard';
import { Appbar, List, Snackbar, TextInput } from "react-native-paper";
import AppbarBackAction from "../../src/components/AppbarBackAction";
import ScreenPage from "../../src/components/Page";
import { useVisibility } from "../../src/hooks/useVisibility";
import { deeplinksList } from '../../src/repositories/deeplinks';

export default function NotificationsPage() {
    const [visible, showSnackbar, hideSnackbar] = useVisibility();
    return (
        <ScreenPage>
            <Snackbar visible={visible} onDismiss={hideSnackbar}>
                Link is copied to clipboard.
            </Snackbar>
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
                            right={
                                <TextInput.Icon
                                    icon="content-copy"
                                    onPress={() => {
                                        Clipboard.setStringAsync(link);
                                        showSnackbar();
                                    }}
                                    forceTextInputFocus={false}
                                />
                            }
                        />
                    ))
                }
            </List.Section>
        </ScreenPage>
    );
}
