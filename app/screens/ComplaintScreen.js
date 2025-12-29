import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useComplaints } from '../context/ComplaintsContext';

export default function ComplaintScreen({ visible, onClose }) {
  const [complaint, setComplaint] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOtherOptions, setShowOtherOptions] = useState(false);
  const { addComplaint } = useComplaints();

  const categories = [
    { id: 1, name: 'Electricity', icon: 'flash' },
    { id: 2, name: 'Water Supply', icon: 'water' },
    { id: 3, name: 'Internet Service', icon: 'wifi' },
    { id: 4, name: 'Cleaning', icon: 'brush' },
    { id: 5, name: 'Maintenance', icon: 'construct' },
    { id: 6, name: 'Others', icon: 'ellipsis-horizontal' },
  ];

  const otherOptions = [
    { id: 1, name: 'Security Issue', icon: 'shield' },
    { id: 2, name: 'Noise Complaint', icon: 'volume-high' },
    { id: 3, name: 'Food Quality', icon: 'restaurant' },
    { id: 4, name: 'Room Issue', icon: 'bed' },
    { id: 5, name: 'Staff Behavior', icon: 'people' },
    { id: 6, name: 'General Issue', icon: 'chatbubble' },
  ];

  const handleCategorySelect = (categoryName) => {
    if (categoryName === 'Others') {
      setShowOtherOptions(true);
      setSelectedCategory(categoryName);
    } else {
      setSelectedCategory(categoryName);
      setShowOtherOptions(false);
    }
  };

  const handleOtherOptionSelect = (optionName) => {
    setSelectedCategory(optionName);
  };

  const handleSubmit = () => {
    if (complaint.trim() && selectedCategory) {
      addComplaint(complaint, selectedCategory);
      setComplaint('');
      setSelectedCategory(null);
      setShowOtherOptions(false);
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Add Complaint</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#000000" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Complaint Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Write Your Complaint"
                placeholderTextColor="#888888"
                multiline
                numberOfLines={4}
                value={complaint}
                onChangeText={setComplaint}
              />
            </View>

            {/* Category Selection */}
            <Text style={styles.categoryTitle}>Select Category</Text>
            <View style={styles.categoryGrid}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryCard,
                    (selectedCategory === category.name || (category.name === 'Others' && showOtherOptions)) && styles.selectedCard,
                  ]}
                  onPress={() => handleCategorySelect(category.name)}
                >
                  <Ionicons
                    name={category.icon}
                    size={32}
                    color={
                      (selectedCategory === category.name || (category.name === 'Others' && showOtherOptions))
                        ? '#FFFFFF'
                        : '#B66DFF'
                    }
                  />
                  <Text
                    style={[
                      styles.categoryText,
                      (selectedCategory === category.name || (category.name === 'Others' && showOtherOptions)) && styles.selectedText,
                    ]}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Other Options - Show when Others is selected */}
            {showOtherOptions && (
              <View style={styles.otherOptionsContainer}>
                <Text style={styles.categoryTitle}>Select Specific Issue</Text>
                <View style={styles.categoryGrid}>
                  {otherOptions.map((option) => (
                    <TouchableOpacity
                      key={option.id}
                      style={[
                        styles.categoryCard,
                        selectedCategory === option.name && styles.selectedCard,
                      ]}
                      onPress={() => handleOtherOptionSelect(option.name)}
                    >
                      <Ionicons
                        name={option.icon}
                        size={32}
                        color={
                          selectedCategory === option.name
                            ? '#FFFFFF'
                            : '#B66DFF'
                        }
                      />
                      <Text
                        style={[
                          styles.categoryText,
                          selectedCategory === option.name && styles.selectedText,
                        ]}
                      >
                        {option.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit Complaint</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 30,
  },
  otherOptionsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    backgroundColor: '#B66DFF',
    borderColor: '#B66DFF',
  },
  categoryText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#000000',
    borderRadius: 25,
    padding: 18,
    alignItems: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
