import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function VirtualTryOn() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Virtual Try-On</Text>
        <Text style={styles.subtitle}>See how clothes look on you</Text>
      </View>

      <View style={styles.comingSoonContainer}>
        <View style={styles.iconCircle}>
          <Icon name="human-handsup" size={80} color="#C8A8E9" />
        </View>
        <Text style={styles.comingSoonTitle}>Coming Soon!</Text>
        <Text style={styles.comingSoonText}>
          Virtual try-on feature is in development. Soon you'll be able to see
          how any outfit looks on you before wearing it!
        </Text>
        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Icon name="check-circle" size={24} color="#4A1B8E" />
            <Text style={styles.featureText}>AI-Powered Fitting</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="check-circle" size={24} color="#4A1B8E" />
            <Text style={styles.featureText}>Real-time Preview</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="check-circle" size={24} color="#4A1B8E" />
            <Text style={styles.featureText}>Multiple Angles</Text>
          </View>
        </View>
      </View>
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
  comingSoonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  iconCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F5F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  comingSoonTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D1654',
    marginBottom: 12,
  },
  comingSoonText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  featureList: {
    alignSelf: 'stretch',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  featureText: {
    fontSize: 16,
    color: '#2D1654',
    marginLeft: 12,
    fontWeight: '500',
  },
});