import { Appbar, Button } from "react-native-paper";
import ScreenPage from "../../src/components/Page";
import { initializeNotifications, registerForPushNotificationsAsync, schedulePushNotification } from '../../src/services/local_notifications';
import { useEffect, useRef, useState } from "react";

import * as Notifications from 'expo-notifications';


export default function NotificationsPage() {

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
                <Appbar.Content title="Videos" />
            </Appbar.Header>
            <Button onPress={schedulePushNotification}>Press to schedule notification</Button>
        </ScreenPage>
    );
}
