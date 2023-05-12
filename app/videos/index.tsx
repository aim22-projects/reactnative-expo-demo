import { Appbar, List } from "react-native-paper";
import ScreenPage from "../../src/components/Page";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { videosList } from "../../src/repositories/videos";

export default function VideosPage() {
    const router = useRouter();
    return (
        <ScreenPage>
            <Appbar.Header elevated>
                <Appbar.Content title="Videos" />
            </Appbar.Header>
            <ScrollView>
                <List.Section>
                    {
                        videosList.map((item, index) => (
                            <List.Item
                                key={index}
                                title={item.title}
                                onPress={() => {
                                    router.push({ pathname: "/videos/play", params: { id: item.id } })
                                }} />
                        ))
                    }
                </List.Section>
            </ScrollView>
        </ScreenPage>
    );
}