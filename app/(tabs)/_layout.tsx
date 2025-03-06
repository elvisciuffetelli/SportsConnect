
import { Tabs } from 'expo-router';
import { MessageSquare } from 'lucide-react-native';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Home } from '~/lib/icons/Home';
import { Search } from '~/lib/icons/Search';
import { User } from '~/lib/icons/User';
import { Users } from '~/lib/icons/Users';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'left',
                tabBarActiveTintColor: '#3b82f6', // This is tailwind's blue-500
                tabBarInactiveTintColor: 'gray',
                // Optional: You can also style the tab bar
                tabBarStyle: {
                    // Any additional styles for the tab bar
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon({ color, size }) {
                        return <Home color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name='discover'
                options={{
                    title: 'Scopri',
                    tabBarIcon({ color, size }) {
                        return <Search color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name='social'
                options={{
                    title: 'Social',
                    tabBarIcon({ color, size }) {
                        return <Users color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name='messages'
                options={{
                    title: 'Chat',
                    tabBarIcon({ color, size }) {
                        return <MessageSquare color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profilo',
                    tabBarIcon({ color, size }) {
                        return <User color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
        </Tabs>
    );
}
