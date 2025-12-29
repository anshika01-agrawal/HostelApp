import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Manas Gangrade',
    id: 'HST-2024-001',
    email: 'manas.gangrade@email.com',
    phone: '+91 98765 43210',
    roomNumber: '205-A',
    course: 'B.Tech Computer Science',
  });
  
  const [editedInfo, setEditedInfo] = useState(userInfo);

  const handleSave = () => {
    setUserInfo(editedInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedInfo(userInfo);
    setIsEditing(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Ionicons name="create-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={50} color="#B66DFF" />
          </View>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.userId}>ID: {userInfo.id}</Text>
          <Text style={styles.userEmail}>{userInfo.email}</Text>
          <Text style={styles.userPhone}>{userInfo.phone}</Text>
          <Text style={styles.userRoom}>Room: {userInfo.roomNumber}</Text>
        </View>

        {/* Menu Options */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="person-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>Personal Information</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="home-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>Room Details</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="document-text-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>Documents</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="notifications-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="settings-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="help-circle-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="information-circle-outline" size={24} color="#B66DFF" />
              <Text style={styles.menuItemText}>About</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888888" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#FF5252" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEditing}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TouchableOpacity onPress={handleCancel}>
                <Ionicons name="close" size={28} color="#000000" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={editedInfo.name}
                  onChangeText={(text) => setEditedInfo({...editedInfo, name: text})}
                  placeholder="Enter your name"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={editedInfo.email}
                  onChangeText={(text) => setEditedInfo({...editedInfo, email: text})}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={editedInfo.phone}
                  onChangeText={(text) => setEditedInfo({...editedInfo, phone: text})}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Room Number</Text>
                <TextInput
                  style={styles.input}
                  value={editedInfo.roomNumber}
                  onChangeText={(text) => setEditedInfo({...editedInfo, roomNumber: text})}
                  placeholder="Enter room number"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Course</Text>
                <TextInput
                  style={styles.input}
                  value={editedInfo.course}
                  onChangeText={(text) => setEditedInfo({...editedInfo, course: text})}
                  placeholder="Enter your course"
                />
              </View>

              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1B3A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  editButton: {
    backgroundColor: '#B66DFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  userId: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 3,
  },
  userPhone: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 3,
  },
  userRoom: {
    fontSize: 14,
    color: '#B66DFF',
    fontWeight: '600',
  },
  menuSection: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 15,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF5252',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 14,
    marginVertical: 20,
  },
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
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 18,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#888888',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#B66DFF',
    borderRadius: 25,
    padding: 18,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
