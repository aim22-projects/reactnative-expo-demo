import { Appbar, Button, List } from "react-native-paper";
import ScreenPage from "../../src/components/Page";
import { initializeNotifications, registerForPushNotificationsAsync, schedulePushNotification } from '../../src/services/local_notifications';
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

        registerForPushNotificationsAsync().then(token => setExpoPushToken(token ?? ''));

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
            <List.Section>
                <List.Item
                    title="Schedule Notification"
                    onPress={schedulePushNotification}
                    left={props => <List.Icon icon="bell" {...props} />}
                />
            </List.Section>
        </ScreenPage>
    );
}
