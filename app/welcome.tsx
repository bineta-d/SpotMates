import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className='text-red-500'>Welcome to SpotMates!</Text>
      <Button title="Continue" onPress={() => router.replace('(tabs)')} />
    </View>
  );
}
