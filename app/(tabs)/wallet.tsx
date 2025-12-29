import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WalletScreen() {
  const [selectedMethod, setSelectedMethod] = useState('Wallet');

  const walletBalance = 5000;

  const handleConfirmPayment = () => {
    console.log('Payment confirmed with:', selectedMethod);
    alert('Payment Successful!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Wallet</Text>
        </View>

        {/* Wallet Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Ionicons name="wallet" size={32} color="#B66DFF" />
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
          </View>
          <Text style={styles.balanceAmount}>₹{walletBalance.toLocaleString()}</Text>
          <TouchableOpacity style={styles.addMoneyButton}>
            <Ionicons name="add-circle" size={20} color="#B66DFF" />
            <Text style={styles.addMoneyText}>Add Money</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Methods */}
        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        <TouchableOpacity
          style={[
            styles.paymentMethodCard,
            selectedMethod === 'Wallet' && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod('Wallet')}
        >
          <View style={styles.methodInfo}>
            <View
              style={[
                styles.radioButton,
                selectedMethod === 'Wallet' && styles.radioButtonSelected,
              ]}
            >
              {selectedMethod === 'Wallet' && <View style={styles.radioButtonInner} />}
            </View>
            <View>
              <Text style={styles.methodName}>Wallet</Text>
              <Text style={styles.methodBalance}>Balance: ₹{walletBalance.toLocaleString()}</Text>
            </View>
          </View>
          <Ionicons name="wallet" size={28} color="#B66DFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentMethodCard,
            selectedMethod === 'UPI' && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod('UPI')}
        >
          <View style={styles.methodInfo}>
            <View
              style={[
                styles.radioButton,
                selectedMethod === 'UPI' && styles.radioButtonSelected,
              ]}
            >
              {selectedMethod === 'UPI' && <View style={styles.radioButtonInner} />}
            </View>
            <View>
              <Text style={styles.methodName}>UPI</Text>
              <Text style={styles.methodBalance}>Pay via UPI apps</Text>
            </View>
          </View>
          <Ionicons name="qr-code" size={28} color="#B66DFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentMethodCard,
            selectedMethod === 'Card' && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod('Card')}
        >
          <View style={styles.methodInfo}>
            <View
              style={[
                styles.radioButton,
                selectedMethod === 'Card' && styles.radioButtonSelected,
              ]}
            >
              {selectedMethod === 'Card' && <View style={styles.radioButtonInner} />}
            </View>
            <View>
              <Text style={styles.methodName}>Debit/Credit Card</Text>
              <Text style={styles.methodBalance}>Add new card</Text>
            </View>
          </View>
          <Ionicons name="card" size={28} color="#B66DFF" />
        </TouchableOpacity>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        
        <View style={styles.transactionCard}>
          <View style={styles.transactionInfo}>
            <View style={styles.transactionIcon}>
              <Ionicons name="home" size={24} color="#B66DFF" />
            </View>
            <View>
              <Text style={styles.transactionTitle}>Rent Payment</Text>
              <Text style={styles.transactionDate}>Dec 1, 2025</Text>
            </View>
          </View>
          <Text style={styles.transactionAmount}>-₹10,000</Text>
        </View>

        <View style={styles.transactionCard}>
          <View style={styles.transactionInfo}>
            <View style={styles.transactionIcon}>
              <Ionicons name="flash" size={24} color="#B66DFF" />
            </View>
            <View>
              <Text style={styles.transactionTitle}>Electricity Bill</Text>
              <Text style={styles.transactionDate}>Nov 28, 2025</Text>
            </View>
          </View>
          <Text style={styles.transactionAmount}>-₹1,200</Text>
        </View>

        <View style={styles.transactionCard}>
          <View style={styles.transactionInfo}>
            <View style={styles.transactionIcon}>
              <Ionicons name="add-circle" size={24} color="#4CAF50" />
            </View>
            <View>
              <Text style={styles.transactionTitle}>Wallet Recharge</Text>
              <Text style={styles.transactionDate}>Nov 25, 2025</Text>
            </View>
          </View>
          <Text style={[styles.transactionAmount, styles.creditAmount]}>+₹5,000</Text>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C1B3A',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#888888',
    marginLeft: 10,
  },
  balanceAmount: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  addMoneyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 12,
  },
  addMoneyText: {
    fontSize: 16,
    color: '#B66DFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  paymentMethodCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedMethod: {
    borderColor: '#B66DFF',
    backgroundColor: '#F5F0FF',
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginRight: 15,
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
  methodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  methodBalance: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#F5F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5252',
  },
  creditAmount: {
    color: '#4CAF50',
  },
  footer: {
    backgroundColor: '#2C1B3A',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingBottom: 30,
  },
  confirmButton: {
    backgroundColor: '#B66DFF',
    borderRadius: 25,
    padding: 18,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
