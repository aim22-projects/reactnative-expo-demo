import { Appbar, List } from "react-native-paper";
import ScreenPage from "../../src/components/Page";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

const items = [
    { id: 1, title: 'Episode 1' },
    { id: 2, title: 'Episode 2' },
    { id: 3, title: 'Episode 3' },
    { id: 4, title: 'Episode 4' },
    { id: 5, title: 'Episode 5' },
    { id: 6, title: 'Episode 6' },
    { id: 7, title: 'Episode 7' },
    { id: 8, title: 'Episode 8' },
    { id: 9, title: 'Episode 9' },
    { id: 10, title: 'Episode 10' },
    { id: 11, title: 'Episode 11' },
    { id: 12, title: 'Episode 12' },
    { id: 13, title: 'Episode 13' },
    { id: 14, title: 'Episode 14' },
    { id: 15, title: 'Episode 15' },
    { id: 16, title: 'Episode 16' },
    { id: 17, title: 'Episode 17' },
    { id: 18, title: 'Episode 18' },
    { id: 19, title: 'Episode 19' },
    { id: 20, title: 'Episode 20' },
];

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
                        items.map((item, index) => (
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