import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ShoppingRecommendations() {
  const recommendations = [
    {
      id: '1',
      title: 'Summer Dresses',
      reason: 'You have no dresses for summer',
      items: 5,
    },
    {
      id: '2',
      title: 'Formal Shoes',
      reason: 'Missing for office wear',
      items: 3,
    },
    {
      id: '3',
      title: 'Light Jackets',
      reason: 'Perfect for evening outings',
      items: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping Suggestions</Text>
        <Text style={styles.subtitle}>Based on your wardrobe gaps</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Wardrobe Analysis */}
        <View style={styles.analysisCard}>
          <Icon name="chart-arc" size={40} color="#4A1B8E" />
          <View style={styles.analysisContent}>
            <Text style={styles.analysisTitle}>Wardrobe Analysis</Text>
            <Text style={styles.analysisText}>
              You're missing 3 key categories for a complete wardrobe
            </Text>
          </View>
        </View>

        {/* Recommendations */}
        {recommendations.map((rec) => (
          <View key={rec.id} style={styles.recCard}>
            <View style={styles.recHeader}>
              <Icon name="lightbulb-on" size={24} color="#FFA500" />
              <Text style={styles.recTitle}>{rec.title}</Text>
            </View>
            <Text style={styles.recReason}>{rec.reason}</Text>
            <View style={styles.recItems}>
              {[...Array(3)].map((_, i) => (
                <View key={i} style={styles.productPreview}>
                  <Icon name="hanger" size={40} color="#C8A8E9" />
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>
                View {rec.items} Items
              </Text>
              <Icon name="chevron-right" size={20} color="#4A1B8E" />
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.comingSoon}>
          <Icon name="store" size={60} color="#C8A8E9" />
          <Text style={styles.comingSoonText}>Store Integration Coming Soon</Text>
          <Text style={styles.comingSoonDesc}>
            We'll connect with your favorite retailers for personalized shopping
          </Text>
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
  analysisCard: {
    backgroundColor: '#F5F0FF',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  analysisContent: {
    flex: 1,
    marginLeft: 16,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  analysisText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  recCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  recHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  recTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1654',
    marginLeft: 12,
  },
  recReason: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  recItems: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  productPreview: {
    width: 80,
    height: 80,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#4A1B8E',
  },
  viewButtonText: {
    color: '#FFF',
    fontWeight: '600',
    marginRight: 8,
  },
  comingSoon: {
    alignItems: 'center',
    padding: 40,
    marginBottom: 100,
  },
  comingSoonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1654',
    marginTop: 16,
  },
  comingSoonDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
});