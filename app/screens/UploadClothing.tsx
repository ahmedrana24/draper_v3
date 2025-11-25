import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function UploadClothing({ navigation }: any) {
  const handleCamera = () => {
    Alert.alert('Camera', 'Opening camera...');
    // Uncomment when configured:
    // launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
    //   if (response.assets) {
    //     // Upload image to backend
    //   }
    // });
  };

  const handleGallery = () => {
    Alert.alert('Gallery', 'Opening gallery...');
    // launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
    //   if (response.assets) {
    //     // Upload image to backend
    //   }
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color="#2D1654" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Clothing</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        <Icon name="tshirt-crew" size={100} color="#C8A8E9" />
        <Text style={styles.mainText}>Add New Item to Wardrobe</Text>
        <Text style={styles.subText}>
          Take a photo or choose from gallery
        </Text>

        <TouchableOpacity style={styles.optionButton} onPress={handleCamera}>
          <Icon name="camera" size={32} color="#4A1B8E" />
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Take Photo</Text>
            <Text style={styles.optionDesc}>Use your camera</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={handleGallery}>
          <Icon name="image-multiple" size={32} color="#4A1B8E" />
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Choose from Gallery</Text>
            <Text style={styles.optionDesc}>Select existing photo</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#999" />
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1654',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D1654',
    marginTop: 24,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 40,
    textAlign: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    elevation: 2,
  },
  optionContent: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D1654',
  },
  optionDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});