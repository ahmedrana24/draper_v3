import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A1B8E" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, User! 👋</Text>
          <Text style={styles.subGreeting}>Ready to look amazing today?</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Icon name="account-circle" size={40} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Today's Outfit Card */}
        <View style={styles.outfitCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Today's Recommendation</Text>
            <Icon name="weather-partly-cloudy" size={24} color="#4A1B8E" />
          </View>
          <View style={styles.weatherInfo}>
            <Text style={styles.weatherText}>22°C • Partly Cloudy</Text>
          </View>
          <View style={styles.outfitPreview}>
            <View style={styles.outfitPlaceholder}>
              <Icon name="tshirt-crew" size={60} color="#C8A8E9" />
            </View>
          </View>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => navigation.navigate('Recommendations')}
          >
            <Text style={styles.viewButtonText}>View All Outfits</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Upload')}
            >
              <View style={styles.actionIcon}>
                <Icon name="plus" size={28} color="#4A1B8E" />
              </View>
              <Text style={styles.actionText}>Add Item</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Wardrobe')}
            >
              <View style={styles.actionIcon}>
                <Icon name="hanger" size={28} color="#4A1B8E" />
              </View>
              <Text style={styles.actionText}>My Wardrobe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Moodboard')}
            >
              <View style={styles.actionIcon}>
                <Icon name="palette" size={28} color="#4A1B8E" />
              </View>
              <Text style={styles.actionText}>Moodboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Packing')}
            >
              <View style={styles.actionIcon}>
                <Icon name="bag-suitcase" size={28} color="#4A1B8E" />
              </View>
              <Text style={styles.actionText}>Pack List</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Stats</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Total Items</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Worn Today</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Favorites</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#4A1B8E',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subGreeting: {
    fontSize: 14,
    color: '#C8A8E9',
    marginTop: 4,
  },
  profileButton: {
    width: 45,
    height: 45,
  },
  outfitCard: {
    backgroundColor: '#FFF',
    margin: 20,
    marginTop: -20,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  weatherInfo: {
    marginBottom: 16,
  },
  weatherText: {
    fontSize: 14,
    color: '#666',
  },
  outfitPreview: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  outfitPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#F5F0FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    backgroundColor: '#4A1B8E',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  viewButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1654',
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F0FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D1654',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A1B8E',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});