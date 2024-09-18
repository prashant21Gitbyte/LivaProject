import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const ProgressSection = () => {
  const currentStage = 5;
  const totalStages = 8;

  return (
    <View style={styles.container}>
      {/* Circular Progress Indicator */}
      <CircularProgress
        radius={30}
        value={currentStage}
        maxValue={totalStages}
        textColor="#0097A7"
        valueSuffix={`/ ${totalStages}`}
        inActiveStrokeColor="#d3d3d3"
        activeStrokeColor="#0097A7"
        activeStrokeWidth={10}
        inActiveStrokeWidth={10}
      />

      {/* Stage Information */}
      <View style={styles.stageInfo}>
        <Text style={styles.currentStage}>Stage {currentStage} Name Here</Text>
        <View style={styles.navigation}>
          <Text style={styles.navText}>← Stage 4 Name</Text>
          <Text style={styles.navText}>Stage 6 Name →</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stageInfo: {
    marginLeft: 10,
  },
  currentStage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  navText: {
    color: '#a9a9a9',
    fontSize: 14,
  },
});

export default ProgressSection;
