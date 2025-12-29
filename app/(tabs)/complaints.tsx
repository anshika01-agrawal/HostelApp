import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ComplaintScreen from '../screens/ComplaintScreen';
import { useComplaints } from '../context/ComplaintsContext';

export default function ComplaintsTab() {
  const [complaintVisible, setComplaintVisible] = useState(false);
  const { complaints } = useComplaints();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return styles.statusPending;
      case 'In Progress':
        return styles.statusInProgress;
      case 'Resolved':
        return styles.statusResolved;
      default:
        return styles.statusPending;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Complaints</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setComplaintVisible(true)}
          >
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Complaints List */}
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <View key={complaint.id} style={styles.complaintCard}>
              <View style={styles.complaintHeader}>
                <View style={[styles.statusBadge, getStatusStyle(complaint.status)]}>
                  <Text style={styles.statusText}>{complaint.status}</Text>
                </View>
                <Text style={styles.dateText}>{complaint.date}</Text>
              </View>
              <Text style={styles.categoryText}>{complaint.category}</Text>
              <Text style={styles.complaintText}>{complaint.text}</Text>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="chatbox-ellipses-outline" size={80} color="#888888" />
            <Text style={styles.emptyText}>No Complaints Yet</Text>
            <Text style={styles.emptySubtext}>Tap + to add your first complaint</Text>
          </View>
        )}
      </ScrollView>

      {/* Add Complaint Modal */}
      <ComplaintScreen 
        visible={complaintVisible} 
        onClose={() => setComplaintVisible(false)} 
      />
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
  addButton: {
    backgroundColor: '#B66DFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  complaintCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusBadge: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusPending: {
    backgroundColor: '#FFA500',
  },
  statusResolved: {
    backgroundColor: '#4CAF50',
  },
  statusInProgress: {
    backgroundColor: '#2196F3',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#888888',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B66DFF',
    marginBottom: 8,
  },
  complaintText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#888888',
    marginTop: 8,
  },
});
