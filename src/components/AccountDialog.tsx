import { Avatar, Dialog, Divider, List, Portal, Text } from "react-native-paper";
import manImage from '../../assets/man.png';


export default
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
                        source={manImage}
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
        </Portal>
    );
}