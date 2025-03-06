
import { Pressable, View } from "react-native";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { H1, Large } from "~/components/ui/typography";
import { Search } from '~/lib/icons/Search';
import { Users } from '~/lib/icons/Users';

export default function Index() {
    return (
        <View className="py-10 px-4 gap-y-4">
            <H1>Benvenuto da Sports Connect</H1>
            <Large>Trova centri sportivi, eventi e persone con cui giocare</Large>
            <View className="flex flex-row">
                <View className="w-1/2 pr-2">
                    <Pressable onPress={() => alert('Prenota')}>
                        <Card className='w-full'>
                            <CardHeader>
                                <CardTitle>Prenota</CardTitle>
                                <CardDescription>Se sai già con chi giocare</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Search />
                            </CardContent>

                        </Card>
                    </Pressable>
                </View>
                <View className="w-1/2 pl-2">
                    <Pressable onPress={() => alert('Prenota')}>
                        <Card className='w-full'>
                            <CardHeader>
                                <CardTitle>Unisciti</CardTitle>
                                <CardDescription>Se cerchi giocatori</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Users />
                            </CardContent>

                        </Card>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
