// Import necessary packages for navigation and displaying the Appbar component
import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";

// Define a function component for the Appbar Back Action which takes you back to the previous screen when pressed.
export default function AppbarBackAction() {
    // Use the useRouter hook from expo-router to navigate between screens
    const router = useRouter();
    // Return the Appbar Back Action component from react-native-paper with the onPress method to navigate to the previous screen when pressed.
    return (<Appbar.BackAction onPress={() => router.back()} />);
}