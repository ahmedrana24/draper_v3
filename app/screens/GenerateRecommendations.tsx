import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GenerateRecommendations({ navigation }: any) {
  const [selectedOutfit, setSelectedOutfit] = useState(0);

  const outfits = [
    { id: 1, occasion: 'Casual Day', weather: '22°C', items: 3 },
    { id: 2, occasion: 'Office Meeting', weather: '22°C', items: 4 },
    { id: 3, occasion: 'Evening Out', weather: '18°C', items: 5 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Today's Outfits</Text>
        <TouchableOpacity>
          <Icon name="refresh" size={28} color="#4A1B8E" />
        </TouchableOpacity>
      </View>

      {/* Weather Info */}
      <View style={styles.weatherCard}>
        <Icon name="weather-sunny" size={32} color="#FFA500" />
        <View style={styles.weatherDetails}>
          <Text style={styles.weatherTemp}>22°C</Text>
          <Text style={styles.weatherDesc}>Sunny & Warm</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Outfit Cards */}
        {outfits.map((outfit, index) => (
          <View key={outfit.id} style={styles.outfitCard}>
            <View style={styles.outfitHeader}>
              <View>
                <Text style={styles.outfitTitle}>{outfit.occasion}</Text>
                <Text style={styles.outfitMeta}>
                  {outfit.items} items • Perfect for {outfit.weather}
                </Text>
              </View>
              <TouchableOpacity>
                <Icon name="heart-outline" size={24} color="#4A1B8E" />
              </TouchableOpacity>
            </View>

            {/* Outfit Preview */}
            <View style={styles.outfitPreview}>
              <View style={styles.clothingItem}>
                <Icon name="tshirt-crew" size={50} color="#C8A8E9" />
              </View>
              <View style={styles.clothingItem}>
                <Icon name="face-woman" size={50} color="#C8A8E9" />
              </View>
              <View style={styles.clothingItem}>
                <Icon name="shoe-sneaker" size={50} color="#C8A8E9" />
              </View>
            </View>

            {/* Actions */}
            <View style={styles.outfitActions}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="eye" size={20} color="#4A1B8E" />
                <Text style={styles.actionBtnText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtnPrimary}>
                <Icon name="check" size={20} color="#FFF" />
                <Text style={styles.actionBtnTextWhite}>Wear This</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Moodboard CTA */}
        <TouchableOpacity
          style={styles.moodboardCTA}
          onPress={() => navigation.navigate('Moodboard')}
        >
          <View style={styles.moodboardIcon}>
            <Icon name="palette" size={32} color="#4A1B8E" />
          </View>
          <View style={styles.moodboardContent}>
            <Text style={styles.moodboardTitle}>Try Moodboard</Text>
            <Text style={styles.moodboardDesc}>
              Create your own custom outfit combinations
            </Text>
          </View>
          <Icon name="chevron-right" size={24} color="#4A1B8E" />
        </TouchableOpacity>
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
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  weatherCard: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  weatherDetails: {
    marginLeft: 16,
  },
  weatherTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  weatherDesc: {
    fontSize: 14,
    color: '#666',
  },
  outfitCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  outfitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  outfitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  outfitMeta: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  outfitPreview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginBottom: 16,
  },
  clothingItem: {
    width: 80,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outfitActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A1B8E',
    gap: 8,
  },
  actionBtnText: {
    color: '#4A1B8E',
    fontWeight: '600',
  },
  actionBtnPrimary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#4A1B8E',
    gap: 8,
  },
  actionBtnTextWhite: {
    color: '#FFF',
    fontWeight: '600',
  },
  moodboardCTA: {
    backgroundColor: '#F5F0FF',
    marginHorizontal: 20,
    marginBottom: 100,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C8A8E9',
    borderStyle: 'dashed',
  },
  moodboardIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodboardContent: {
    flex: 1,
    marginLeft: 16,
  },
  moodboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  moodboardDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});