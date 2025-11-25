import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Moodboard({ navigation }: any) {
  const [canvasItems, setCanvasItems] = useState<any[]>([]);
  const [selectedTool, setSelectedTool] = useState('select');

  const wardrobeItems = [
    { id: '1', icon: 'tshirt-crew', color: '#4A90E2', name: 'Blue Shirt' },
    { id: '2', icon: 'face-woman', color: '#E74C3C', name: 'Red Dress' },
    { id: '3', icon: 'shoe-sneaker', color: '#2D2D2D', name: 'Black Shoes' },
    { id: '4', icon: 'sunglasses', color: '#F39C12', name: 'Sunglasses' },
  ];

  const addToCanvas = (item: any) => {
    setCanvasItems([
      ...canvasItems,
      {
        ...item,
        x: Math.random() * 200,
        y: Math.random() * 300,
        id: Date.now().toString(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#2D1654" />
        </TouchableOpacity>
        <Text style={styles.title}>Moodboard</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerBtn}>
            <Icon name="content-save" size={24} color="#4A1B8E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Icon name="share-variant" size={24} color="#4A1B8E" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Canvas */}
      <View style={styles.canvas}>
        <View style={styles.canvasArea}>
          {canvasItems.length === 0 ? (
            <View style={styles.emptyCanvas}>
              <Icon name="gesture-tap" size={60} color="#C8A8E9" />
              <Text style={styles.emptyText}>
                Tap items below to add to canvas
              </Text>
            </View>
          ) : (
            canvasItems.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.canvasItem,
                  { left: item.x, top: item.y, backgroundColor: item.color },
                ]}
              >
                <Icon name={item.icon} size={40} color="#FFF" />
              </View>
            ))
          )}
        </View>
      </View>

      {/* Toolbar */}
      <View style={styles.toolbar}>
        <TouchableOpacity
          style={[
            styles.toolBtn,
            selectedTool === 'select' && styles.toolBtnActive,
          ]}
          onPress={() => setSelectedTool('select')}
        >
          <Icon name="cursor-default" size={24} color="#2D1654" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toolBtn,
            selectedTool === 'delete' && styles.toolBtnActive,
          ]}
          onPress={() => setSelectedTool('delete')}
        >
          <Icon name="eraser" size={24} color="#2D1654" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toolBtn}
          onPress={() => setCanvasItems([])}
        >
          <Icon name="delete-sweep" size={24} color="#E74C3C" />
        </TouchableOpacity>
      </View>

      {/* Wardrobe Items Panel */}
      <View style={styles.itemsPanel}>
        <Text style={styles.panelTitle}>Your Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {wardrobeItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.wardrobeItem}
              onPress={() => addToCanvas(item)}
            >
              <View
                style={[styles.itemIcon, { backgroundColor: item.color }]}
              >
                <Icon name={item.icon} size={32} color="#FFF" />
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerBtn: {
    padding: 4,
  },
  canvas: {
    flex: 1,
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 16,
    elevation: 2,
  },
  canvasArea: {
    flex: 1,
    position: 'relative',
  },
  emptyCanvas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
  },
  canvasItem: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  toolbar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  toolBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  toolBtnActive: {
    backgroundColor: '#C8A8E9',
  },
  itemsPanel: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1654',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  wardrobeItem: {
    alignItems: 'center',
    marginLeft: 20,
  },
  itemIcon: {
    width: 70,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 12,
    color: '#666',
  },
});