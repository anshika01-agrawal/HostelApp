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
import { useRouter } from 'expo-router';

export default function PaymentScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('Debit');
  const [selectedBill, setSelectedBill] = useState('Rent');

  const bills = [
    { id: 1, name: 'Rent', amount: 10000 },
    { id: 2, name: 'Electricity', amount: 1200 },
    { id: 3, name: 'Water', amount: 500 },
    { id: 4, name: 'Maintenance', amount: 800 },
  ];

  const totalAmount = 12500;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#B66DFF" />
      
      {/* Purple Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.purpleSection}>
        <Text style={styles.totalLabel}>Total Rent</Text>
        <Text style={styles.totalAmount}>₹{totalAmount.toLocaleString()}</Text>
      </View>

      <ScrollView style={styles.contentSection}>
        {/* Debit / History Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, selectedTab === 'Debit' && styles.activeToggle]}
            onPress={() => setSelectedTab('Debit')}
          >
            <Text style={[styles.toggleText, selectedTab === 'Debit' && styles.activeToggleText]}>
              Debit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, selectedTab === 'History' && styles.activeToggle]}
            onPress={() => setSelectedTab('History')}
          >
            <Text style={[styles.toggleText, selectedTab === 'History' && styles.activeToggleText]}>
              History
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bill Selection */}
        <Text style={styles.sectionTitle}>Select Bills to Pay</Text>
        {bills.map((bill) => (
          <TouchableOpacity
            key={bill.id}
            style={styles.billItem}
            onPress={() => setSelectedBill(bill.name)}
          >
            <View style={styles.billInfo}>
              <View
                style={[
                  styles.radioButton,
                  selectedBill === bill.name && styles.radioButtonSelected,
                ]}
              >
                {selectedBill === bill.name && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={styles.billName}>{bill.name}</Text>
            </View>
            <Text style={styles.billAmount}>₹{bill.amount.toLocaleString()}</Text>
          </TouchableOpacity>
        ))}

        {/* Bill Breakdown */}
        <View style={styles.breakdownCard}>
          <Text style={styles.breakdownTitle}>Bill Breakdown</Text>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>Subtotal</Text>
            <Text style={styles.breakdownValue}>₹{totalAmount.toLocaleString()}</Text>
          </View>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>Tax</Text>
            <Text style={styles.breakdownValue}>₹0</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownTotalLabel}>Total</Text>
            <Text style={styles.breakdownTotalValue}>₹{totalAmount.toLocaleString()}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Pay Now Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.payButton}
          onPress={() => router.push('/(tabs)/wallet')}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#B66DFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  purpleSection: {
    backgroundColor: '#B66DFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contentSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 5,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeToggle: {
    backgroundColor: '#B66DFF',
  },
  toggleText: {
    fontSize: 16,
    color: '#888888',
    fontWeight: '600',
  },
  activeToggleText: {
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  billInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#B66DFF',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#B66DFF',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#B66DFF',
  },
  billName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  billAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  breakdownCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  breakdownLabel: {
    fontSize: 16,
    color: '#888888',
  },
  breakdownValue: {
    fontSize: 16,
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 10,
  },
  breakdownTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  breakdownTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B66DFF',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  payButton: {
    backgroundColor: '#000000',
    borderRadius: 25,
    padding: 18,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
