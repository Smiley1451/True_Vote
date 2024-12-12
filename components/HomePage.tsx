// components/HomePage.tsx

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, Modal } from 'react-native';
import { Bell, Home, LogOut, Menu, User, CheckCircle } from 'react-native-feather';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const elections = [
    { id: 1, title: "City Council Election", description: "Vote for your local representatives", endDate: "2024-06-15", status: "active" },
    { id: 2, title: "State Governor Election", description: "Choose your state's next leader", endDate: "2025-11-07", status: "upcoming" },
    { id: 3, title: "School Board Election", description: "Shape the future of local education", endDate: "2024-05-30", status: "active" },
  ];

  const renderSidebar = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSidebarOpen}
      onRequestClose={() => setIsSidebarOpen(false)}
    >
      <View style={styles.sidebarContainer}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Menu</Text>
          <TouchableOpacity style={styles.sidebarItem}>
            <Home stroke="green" width={24} height={24} />
            <Text style={styles.sidebarItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <CheckCircle stroke="green" width={24} height={24} />
            <Text style={styles.sidebarItemText}>My Votes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Bell stroke="green" width={24} height={24} />
            <Text style={styles.sidebarItemText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <User stroke="green" width={24} height={24} />
            <Text style={styles.sidebarItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <LogOut stroke="red" width={24} height={24} />
            <Text style={[styles.sidebarItemText, { color: 'red' }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsSidebarOpen(true)}>
          <Menu stroke="white" width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>True Sovereign Vote</Text>
        <View style={styles.avatar} />
      </View>
      {renderSidebar()}
      <ScrollView style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search elections..."
          placeholderTextColor="#a7f3d0"
        />
        <Text style={styles.sectionTitle}>Active Elections</Text>
        {elections.map((election) => (
          <View key={election.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{election.title}</Text>
              <Text style={styles.cardDescription}>{election.description}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardDate}>Ends on: {new Date(election.endDate).toLocaleDateString()}</Text>
            </View>
            <View style={styles.cardFooter}>
              <TouchableOpacity
                style={[styles.voteButton, election.status !== 'active' && styles.voteButtonDisabled]}
                disabled={election.status !== 'active'}
              >
                <Text style={styles.voteButtonText}>
                  {election.status === 'active' ? 'Vote Now' : 'Upcoming'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    backgroundColor: '#16a34a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#d1d5db' },
  sidebarContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  sidebar: { width: 300, backgroundColor: 'white', padding: 20, height: '100%' },
  sidebarTitle: { fontSize: 18, fontWeight: 'bold', color: '#16a34a', marginBottom: 20 },
  sidebarItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  sidebarItemText: { marginLeft: 10, fontSize: 16, color: '#16a34a' },
  content: { flex: 1, padding: 16 },
  searchInput: { backgroundColor: '#22c55e', color: 'white', padding: 10, borderRadius: 4, marginBottom: 16 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#15803d', marginBottom: 16 },
  card: { backgroundColor: 'white', borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: '#bbf7d0', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardHeader: { padding: 16 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#15803d', marginBottom: 8 },
  cardDescription: { fontSize: 14, color: '#4b5563' },
  cardContent: { padding: 16, paddingTop: 0 },
  cardDate: { fontSize: 12, color: '#6b7280' },
  cardFooter: { padding: 16, paddingTop: 0 },
  voteButton: { backgroundColor: '#16a34a', padding: 12, borderRadius: 4, alignItems: 'center' },
  voteButtonDisabled: { backgroundColor: '#d1d5db' },
  voteButtonText: { color: 'white', fontWeight: 'bold' },
});

export default HomePage;
