// HUB ( WHERE ALL FILES ARE MANAGED FOR ROUTING , THEMES DECIDE)
// INDEX IS CREATED WHEN RUN BY SOME DEFAULT CODE 

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="app" options={{ headerShown: false }} />
    </Stack>
  );
}
