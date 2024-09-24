import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const steps = [
  {title: 'Stage 1', status: 'completed'},
  {title: 'Stage 2', status: 'completed'},
  {title: 'Stage 3', status: 'completed'},
  {title: 'Stage 4', status: 'completed'},
  {title: 'Stage 5', status: 'current'},
  {title: 'Stage 6', status: 'upcoming'},
  {title: 'Stage 7', status: 'upcoming'},
  {title: 'Stage 8', status: 'upcoming'},
];

const StatusIndicator = () => {
  const navigation = useNavigation();
  const currentStage = 5;
  const totalStages = 8;
  const [currentStageState, setCurrentStageState] = useState(currentStage);

  const updateStage = index => {
    console.log(index);
    setCurrentStageState(index + 1);
    steps.map((item, mapIndex) => {
      if (mapIndex < index) {
        item.status = 'completed';
      } else if (mapIndex === index) {
        item.status = 'current';
      } else if (mapIndex > index) {
        item.status = 'upcoming';
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <Text
          style={
            styles.progressText
          }>{`${currentStageState}/${totalStages}`}</Text>
        <Text style={styles.currentStageText}>Stage {currentStageState}</Text>
      </View>
      <View style={styles.horizontalLine} />

      {/* Vertical Stepper */}
      <View style={styles.stepper}>
        {steps.map((step, index) => (
          <TouchableOpacity key={index} onPress={() => updateStage(index)}>
            <View key={index} style={styles.step}>
              <View style={styles.iconContainer}>
                {step.status === 'completed' ? (
                  <IonIcons
                    name="checkmark-circle-sharp"
                    size={24}
                    color="green"
                  />
                ) : step.status === 'current' ? (
                  <IonIcons
                    name="checkmark-circle-sharp"
                    size={24}
                    color="orange"
                  />
                ) : (
                  <IonIcons
                    name="checkmark-circle-sharp"
                    size={24}
                    color="grey"
                  />
                )}
                {index < steps.length - 1 && (
                  <View style={styles.verticalLine} />
                )}
              </View>
              <Text
                style={[
                  {
                    alignSelf: 'flex-start',
                  },
                  step.status === 'current'
                    ? styles.currentStepText
                    : styles.stepText,
                ]}>
                {step.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Account Home')}>
        <Text style={styles.buttonText}>Mark Status as Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 30,

    backgroundColor: 'white',
    flex: 1,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    color: '#0097A7',
    fontWeight: 'bold',
  },
  currentStageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
  },
  stepper: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  verticalLine: {
    height: 20,
    width: 2,
    backgroundColor: '#d3d3d3',
    marginTop: 2,
  },
  stepText: {
    fontSize: 16,
    color: '#808080',
  },
  currentStepText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0097A7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StatusIndicator;
