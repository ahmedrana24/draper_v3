import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import all screens
import GenerateRecommendations from './screens/GenerateRecommendations';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import ManageWardrobe from './screens/ManageWardrobe';
import Moodboard from './screens/Moodboard';
import ShoppingRecommendations from './screens/ShoppingRecommendations';
import SmartPacking from './screens/SmartPacking';
import UploadClothing from './screens/UploadClothing';
import VirtualTryOn from './screens/VirtualTryOn';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Custom Tab Bar with Floating + Button
function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Icon mapping
          let iconName = 'home';
          if (route.name === 'HomeTab') iconName = 'home-variant';
          if (route.name === 'Wardrobe') iconName = 'hanger';
          if (route.name === 'Recommendations') iconName = 'lightbulb-outline';
          if (route.name === 'Shopping') iconName = 'shopping-outline';
          if (route.name === 'Packing') iconName = 'bag-suitcase';
          if (route.name === 'VirtualTryOn') iconName = 'tshirt-crew';

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
            >
              <Icon
                name={iconName}
                size={24}
                color={isFocused ? '#4A1B8E' : '#999'}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Floating Upload Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Upload')}
        activeOpacity={0.8}
      >
        <Icon name="plus" size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

// Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Wardrobe" component={ManageWardrobe} />
      <Tab.Screen name="Recommendations" component={GenerateRecommendations} />
      <Tab.Screen name="Shopping" component={ShoppingRecommendations} />
      <Tab.Screen name="Packing" component={SmartPacking} />
      <Tab.Screen name="VirtualTryOn" component={VirtualTryOn} />
    </Tab.Navigator>
  );
}

// Main App Navigation
export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={MainTabs} />
      <Stack.Screen name="Upload" component={UploadClothing} />
      <Stack.Screen name="Moodboard" component={Moodboard} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'relative',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingBottom: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A1B8E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#4A1B8E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});