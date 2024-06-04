import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

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
  },
  input: {
    backgroundColor: '#333',
    color: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
});

export default ExerciseCard;
