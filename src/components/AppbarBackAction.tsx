import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";

export default function AppbarBackAction() {
    const router = useRouter();
    return (<Appbar.BackAction onPress={() => router.back()} />);
}