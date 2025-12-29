import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ComplaintScreen from '../screens/ComplaintScreen';

export default function HomeScreen() {
  const router = useRouter();
  const [complaintVisible, setComplaintVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Purple Rectangle Background */}
      <View style={styles.topSection}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Manas</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Occupant Card */}
        <View style={styles.occupantCard}>
          <View style={styles.purpleSection}>
            <Text style={styles.occupantLabel}>OCCUPANT</Text>
            <TouchableOpacity 
              style={styles.payRentButton}
              onPress={() => router.push('/payment')}
            >
              <Text style={styles.payRentText}>PAY RENT</Text>
            </TouchableOpacity>
          </View>
          <ImageBackground 
            source={require('../../imageApp/GridPattern.png')}
            style={styles.whiteSection}
            imageStyle={{
              borderBottomLeftRadius: 18,
              borderBottomRightRadius: 18,
            }}
          >
            <View style={styles.userInfo}>
              <Text style={styles.userName}>MANAS GANGRADE</Text>
              <Text style={styles.userDetails}>04/10/2026</Text>
            </View>
            <View style={styles.duesSection}>
              <Text style={styles.duesLabel}>Total Dues</Text>
              <Text style={styles.duesAmount}>10,000</Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      {/* White Background Section */}
      <ScrollView style={styles.bottomSection} showsVerticalScrollIndicator={false}>
        {/* Bills Section */}
        <Text style={styles.sectionTitle}>Bills</Text>
        <View style={styles.billsContainer}>
          <View style={styles.billCard}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconBackground, { backgroundColor: '#B558FE' }]}>
                <Text style={{ fontSize: 24, color: '#FFFFFF' }}>💧</Text>
              </View>
            </View>
            <Text style={styles.billTitle}>Other Bills</Text>
            <Text style={styles.billAmount}>₹1,000</Text>
          </View>
          <View style={styles.billCard}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconBackground, { backgroundColor: '#F3F38C' }]}>
                <Ionicons name="flash" size={24} color="#000000" />
              </View>
            </View>
            <Text style={styles.billTitle}>Electric Bill</Text>
            <Text style={styles.billAmount}>₹1,250</Text>
          </View>
        </View>

        {/* Services Grid */}
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesContainer}>
          {/* First Row */}
          <View style={styles.servicesRow}>
            <TouchableOpacity style={styles.serviceCard}>
              <Ionicons name="sparkles-outline" size={32} color="#888888" />
              <Text style={styles.serviceText}>Cleaning Service</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.serviceCard}>
              <Ionicons name="card-outline" size={32} color="#888888" />
              <Text style={styles.serviceText}>Gate Pass</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.serviceCard, styles.highlightedCard]}
              onPress={() => setComplaintVisible(true)}
            >
              <Ionicons name="add" size={32} color="#FFFFFF" />
              <Text style={[styles.serviceText, styles.highlightedText]}>Add Complaints</Text>
            </TouchableOpacity>
          </View>
          
          {/* Second Row */}
          <View style={styles.servicesRow}>
            <TouchableOpacity style={styles.serviceCard}>
              <Ionicons name="restaurant-outline" size={32} color="#888888" />
              <Text style={styles.serviceText}>Food Menu</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.serviceCard}>
              <Ionicons name="people-outline" size={32} color="#888888" />
              <Text style={styles.serviceText}>Community Board</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => router.push('/(tabs)/complaints')}
            >
              <Ionicons name="chatbox-ellipses-outline" size={32} color="#888888" />
              <Text style={styles.serviceText}>Complaints</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Complaint Modal */}
      <ComplaintScreen 
        visible={complaintVisible} 
        onClose={() => setComplaintVisible(false)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topSection: {
    backgroundColor: '#402A51',
    paddingTop: 40,
    paddingBottom: 20,
    width: '100%',
    height: 400,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  greeting: {
    width: 142,
    height: 30,
    position: 'absolute',
    top: 64,
    left: 20,
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 20,
    letterSpacing: 0.8,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  occupantCard: {
    width: 311,
    height: 200,
    marginTop: 60,
    marginLeft: 43,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  purpleSection: {
    backgroundColor: '#B558FE',
    position: 'relative',
    height: 92,
    width: '100%',
  },
  occupantLabel: {
    position: 'absolute',
    top: 35,
    left: 20,
    fontSize: 28,
    fontFamily: 'Karantina_400Regular',
    fontWeight: '400',
    color: '#FFFFFF',
    letterSpacing: 1.68,
    textAlign: 'left',
  },
  payRentButton: {
    position: 'absolute',
    width: 117,
    height: 37,
    top: 27,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 6,
    borderLeftWidth: 1,
    borderColor: '#C497E8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  payRentText: {
    fontSize: 11,
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: -0.22,
    textAlign: 'center',
  },
  whiteSection: {
    width: 311,
    height: 108,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.48,
    marginBottom: 4,
  },
  userDetails: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.48,
    opacity: 0.8,
  },
  userInfo: {
    flex: 1,
  },
  duesSection: {
    alignItems: 'flex-end',
  },
  duesLabel: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.48,
    opacity: 0.8,
    marginBottom: 4,
  },
  duesAmount: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.48,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#888888',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  valueHighlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B66DFF',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  billsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
  },
  billCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 10,
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  billTitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 10,
  },
  billAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,
  },
  servicesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  serviceCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  highlightedCard: {
    backgroundColor: '#000000',
  },
  serviceText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
  highlightedText: {
    color: '#FFFFFF',
  },
});
