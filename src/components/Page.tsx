import { Children, ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenPage(props: { children: ReactNode, safeArea?: boolean }) {
    const theme = useTheme();
    return props.safeArea ? (
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            {props.children}
        </SafeAreaView>
    ) : (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            {props.children}
        </View>
    );
}