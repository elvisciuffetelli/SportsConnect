import { Pressable, View } from "react-native";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Search } from '~/lib/icons/Search';
import { Users } from '~/lib/icons/Users';

interface ActionCardProps {
    title: string;
    description: string;
    icon: "search" | "users";
    onPress?: () => void;
}

export function ActionCard({ title, description, icon, onPress }: ActionCardProps) {
    return (
        <Pressable onPress={onPress} className="w-[49%]">
            <Card className="items-center">
                <CardHeader>
                    <CardTitle className="text-center">{title}</CardTitle>
                    <CardDescription className="text-center">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {icon === "search" ? (
                        <Search size={30} color="#3b82f6" />
                    ) : (
                        <Users size={30} color="#3b82f6" />
                    )}
                </CardContent>
            </Card>
        </Pressable>
    );
}