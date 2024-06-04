import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

interface ExerciseCardProps {
  exercise: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.exerciseName}>{exercise}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Kgs"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Reps"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  exerciseName: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  submitButton: {
    backgroundColor: '#1DB954',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExerciseCard;
