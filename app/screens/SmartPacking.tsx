import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SmartPacking() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');

  const packingList = [
    { category: 'Tops', items: ['White T-Shirt', 'Blue Shirt', 'Black Polo'] },
    { category: 'Bottoms', items: ['Jeans', 'Khaki Shorts'] },
    { category: 'Shoes', items: ['Sneakers', 'Sandals'] },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Packing</Text>
        <Text style={styles.subtitle}>Let AI pack for your trip</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trip Details */}
        <View style={styles.tripCard}>
          <Text style={styles.cardTitle}>Trip Details</Text>
          <View style={styles.inputGroup}>
            <Icon name="map-marker" size={20} color="#4A1B8E" />
            <TextInput
              style={styles.input}
              placeholder="Where are you going?"
              value={destination}
              onChangeText={setDestination}
            />
          </View>
          <View style={styles.inputGroup}>
            <Icon name="calendar" size={20} color="#4A1B8E" />
            <TextInput
              style={styles.input}
              placeholder="How many days?"
              value={days}
              onChangeText={setDays}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.generateButton}>
            <Icon name="magic-staff" size={20} color="#FFF" />
            <Text style={styles.generateButtonText}>Generate Pack List</Text>
          </TouchableOpacity>
        </View>

        {/* Packing List */}
        {packingList.map((section, index) => (
          <View key={index} style={styles.listSection}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item, i) => (
              <View key={i} style={styles.listItem}>
                <Icon name="checkbox-marked-circle" size={24} color="#4A1B8E" />
                <Text style={styles.listItemText}>{item}</Text>
                <TouchableOpacity>
                  <Icon name="close" size={20} color="#999" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}

        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={20} color="#4A1B8E" />
          <Text style={styles.addButtonText}>Add Custom Item</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tripCard: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1654',
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#2D1654',
  },
  generateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A1B8E',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  generateButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  listSection: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1654',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  listItemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#2D1654',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 100,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#4A1B8E',
    borderStyle: 'dashed',
    gap: 8,
  },
  addButtonText: {
    color: '#4A1B8E',
    fontSize: 16,
    fontWeight: '600',
  },
});