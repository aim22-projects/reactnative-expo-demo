import { Appbar, Button, List, Text } from "react-native-paper";
import ScreenPage from "../../src/components/Page";
import { getPushToken, initializeNotifications, registerForPushNotificationsAsync, schedulePushNotification } from '../../src/services/local_notifications';
import { useEffect, useRef, useState } from "react";

import * as Notifications from 'expo-notifications';
import { useRouter } from "expo-router";
import AppbarBackAction from "../../src/components/AppbarBackAction";


export default function NotificationsPage() {
    const router = useRouter();
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState<Notifications.Notification>();
    const notificationListener = useRef<any>();
    const responseListener = useRef<any>();

    useEffect(() => {
        initializeNotifications();
        // 
        registerForPushNotificationsAsync();
        // get push token
        // getPushToken().then(token => setExpoPushToken(token ?? ''));
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <ScreenPage>
            <Appbar.Header elevated>
                <AppbarBackAction />
                <Appbar.Content title="Notifications" />
            </Appbar.Header>
            <List.Section style={{ padding: 3 }}>
                <Text style={{ alignSelf: 'center', marginBottom: 8, }}>
                    Schedule Notification by pressing button
                </Text>
                <Button
                    mode="contained"
                    icon={props => <List.Icon icon="bell-plus" {...props} />}
                    onPress={schedulePushNotification}>
                    Schedule
                </Button>
            </List.Section>
        </ScreenPage>
    );
}
