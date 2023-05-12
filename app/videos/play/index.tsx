import { Divider, List, Text } from "react-native-paper";
import ScreenPage from "../../../src/components/Page";
import { useSearchParams } from "expo-router";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { videosList } from "../../../src/repositories/videos";

export default function PlayPage() {
    const { id } = useSearchParams();
    const [status, setStatus] = useState<any>({});

    const video = videosList.find(video => video.id.toString() === id);

    return (
        <ScreenPage safeArea>
            <Video
                style={{ width: '100%', aspectRatio: 1.78 }}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <List.Item title={video?.title} description="34 views 6 months ago" />
            <Divider />
            <List.Item title={"My Playlist"} titleStyle={{ fontWeight: '700' }} />
            <Divider />
        </ScreenPage>
    );
}