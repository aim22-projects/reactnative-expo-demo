import { ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenPageProps {
    children: ReactNode;
    safeArea?: boolean;
}

export default function ScreenPage({ children, safeArea }: ScreenPageProps) {
    const { colors } = useTheme();
    const Container = safeArea ? SafeAreaView : View;

    return (
        <Container style={{ backgroundColor: colors.background, flex: 1 }}>
            {children}
        </Container>
    );
}