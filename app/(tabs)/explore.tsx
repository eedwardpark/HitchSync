import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { YStack, Button } from "tamagui";

const HitchSyncLanding: React.FC = () => {
  const handleDriverPress = () => {
    Alert.alert("Driver selected!", "Redirecting to the Driver page.");
    // Add navigation logic here
  };

  const handleCarpoolPress = () => {
    Alert.alert("Carpool selected!", "Redirecting to the Carpool page.");
    // Add navigation logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HitchSync</Text>
      <View style={styles.buttonContainer}>
        <YStack>
          <Button
            variant="outlined"
            onPress={handleDriverPress}
            color="#007bff"
          >
            I am a driver!
          </Button>
          <Button
            variant="outlined"
            onPress={handleCarpoolPress}
            color="#007bff"
          >
            Looking for a ride.
          </Button>
        </YStack>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
});

export default HitchSyncLanding;
