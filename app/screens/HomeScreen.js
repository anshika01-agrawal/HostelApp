import { Ionicons } from '@expo/vector-icons';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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
              onPress={() => navigation.navigate('Payment')}
            >
              <Text style={styles.payRentText}>PAY RENT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whiteSection}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>MANAS GANGRADE</Text>
              <Text style={styles.userDetails}>Expiry: 04/10/2026</Text>
            </View>
            <View style={styles.duesSection}>
              <Text style={styles.duesLabel}>Total Dues</Text>
              <Text style={styles.duesAmount}>â‚¹10,000</Text>
            </View>
          </View>
        </View>
      </View>

      {/* White Background Section */}
      <ScrollView style={styles.bottomSection} showsVerticalScrollIndicator={false}>
        {/* Bills Section */}
        <Text style={styles.sectionTitle}>Bills</Text>
        <View style={styles.billsContainer}>
          <View style={styles.billCard}>
            <Ionicons name="flash" size={32} color="#B66DFF" />
            <Text style={styles.billTitle}>Other Bills</Text>
            <Text style={styles.billAmount}>â‚¹1000</Text>
          </View>
          <View style={styles.billCard}>
            <Ionicons name="document-text" size={32} color="#B66DFF" />
            <Text style={styles.billTitle}>Electric Bill</Text>
            <Text style={styles.billAmount}>â‚¹1,250</Text>
          </View>
        </View>

        {/* Services Grid */}
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceCard}>
            <Ionicons name="brush" size={32} color="#B66DFF" />
            <Text style={styles.serviceText}>Cleaning Service</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Ionicons name="card" size={32} color="#B66DFF" />
            <Text style={styles.serviceText}>Gate Pass</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.serviceCard, styles.highlightedCard]}
            onPress={() => navigation.navigate('Complaint')}
          >
            <Ionicons name="chatbox-ellipses" size={32} color="#FFFFFF" />
            <Text style={[styles.serviceText, styles.highlightedText]}>Add Complaints</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Ionicons name="restaurant" size={32} color="#B66DFF" />
            <Text style={styles.serviceText}>Food Menu</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Ionicons name="people" size={32} color="#B66DFF" />
            <Text style={styles.serviceText}>Community Board</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={() => navigation.navigate('Wallet')}
          >
            <Ionicons name="wallet" size={32} color="#B66DFF" />
            <Text style={styles.serviceText}>Deposit Money</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  occupantCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  purpleSection: {
    backgroundColor: '#B558FE',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  occupantLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  payRentButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  payRentText: {
    color: '#B558FE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  whiteSection: {
    backgroundColor: '#000000',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  userDetails: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  duesSection: {
    alignItems: 'flex-end',
  },
  duesLabel: {
    fontSize: 12,
    marginBottom: 4,
    color: '#FFFFFF',
  duesAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  serviceCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
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
