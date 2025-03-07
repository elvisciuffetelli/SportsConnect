
import { ScrollView, View } from "react-native";
import { ActionCard } from "~/components/home/ActionCard";
import { EventCard } from "~/components/home/EventCard";
import { H1, H3, Large } from "~/components/ui/typography";


export default function Index() {
    return (
        <ScrollView className="py-10 px-4 gap-y-4">
            <H1>Benvenuto da Sports Connect 👋</H1>
            <Large>Trova centri sportivi, eventi e persone con cui giocare</Large>
            <View className="flex flex-row justify-between mt-8">
                <View className="flex flex-row justify-between mt-8">
                    <ActionCard
                        title="Prenota"
                        description="Se sai già con chi giocare"
                        icon="search"
                        onPress={() => alert('Prenota')}
                    />
                    <ActionCard
                        title="Unisciti"
                        description="Se cerchi giocatori"
                        icon="users"
                        onPress={() => alert('Prenota')}
                    />
                </View>
            </View>
            <H3 className="mt-8 mb-4">Prossimi eventi</H3>
            <EventCard
                title="Partita di calcetto"
                location="Area Monticchio"
                participants="3/5"
                dateTime="Oggi, 5:00 PM"
                onJoin={() => alert('Partecipa')}
            />
            <EventCard
                title="Partita di padel"
                location="Campo Padel"
                participants="1/4"
                dateTime="Domani, 9:00 PM"
                onJoin={() => alert('Partecipa')}
            />
        </ScrollView>
    );
}
