import { Avatar, Dialog, Divider, List, Portal, Text } from "react-native-paper";
import manImage from '../../assets/man.png';

type AccountDialogProps = {
    visible: boolean,
    hideDialog: () => void,
};

export default function AccountDialog(props: AccountDialogProps) {
    const { visible, hideDialog } = props;

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Text style={{ alignSelf: 'center' }} variant="titleLarge">
                    Expo Test
                </Text>

                <List.Item
                    title="Test user"
                    description="testuser@mail.com"
                    left={(props) => (
                        <Avatar.Image
                            {...props}
                            size={24}
                            source={manImage}
                        />
                    )}
                />

                <Divider />

                <List.Section>
                    <List.Item
                        title="Action 1"
                        left={(props) => <List.Icon {...props} icon="plus" />}
                    />

                    <List.Item
                        title="Action 2"
                        left={(props) => <List.Icon {...props} icon="plus" />}
                    />
                </List.Section>
            </Dialog>
        </Portal>
    );
}