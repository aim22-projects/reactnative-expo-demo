import { Text } from "react-native-paper";
import ScreenPage from "../../../src/components/Page";
import { useSearchParams } from "expo-router";

export default function PlayPage() {
    const { id } = useSearchParams();
    return (
        <ScreenPage safeArea>
            <Text>{id}</Text>
        </ScreenPage>
    );
}