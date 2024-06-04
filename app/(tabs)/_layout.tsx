import React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, StatusBar } from 'react-native';
import ExerciseCard from '@/components/ExerciseCard';

const exercises = [
  'Bench Press',
  'Squat',
  'Deadlift',
  'Overhead Press',
  'Barbell Row',
  'Pull-Up',
  'Dumbbell Curl',
  'Tricep Extension',
  'Leg Press',
  'Calf Raise',
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Gym Tracker</Text>
        </View>
        <ScrollView>
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise} exercise={exercise} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1D3D47',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
