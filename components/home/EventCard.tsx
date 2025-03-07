import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Calendar } from '~/lib/icons/Calendar';

import { Users } from '~/lib/icons/Users';

interface EventCardProps {
    title: string;
    location: string;
    participants: string;
    dateTime: string;
    onJoin?: () => void;
}

export function EventCard({ title, location, participants, dateTime, onJoin }: EventCardProps) {
    return (
        <Card className="mb-2">
            <CardHeader className="flex-row justify-between">
                <View>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{location}</CardDescription>
                </View>
                <View className="flex-row gap-x-1">
                    <Users color="black" size={20} />
                    <Text>{participants}</Text>
                </View>
            </CardHeader>
            <CardContent className="flex-row justify-between items-end">
                <View className="flex-row gap-x-1">
                    <Calendar color="black" size={20} />
                    <Text>{dateTime}</Text>
                </View>
                <Button variant="default" onPress={onJoin}>
                    <Text>Partecipa</Text>
                </Button>
            </CardContent>
        </Card>
    );
}