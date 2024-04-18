import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <ImageBackground source={require("../assets/h2.jpg")} style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 25 }}>Your Points</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.score}>{score}</Text>
     
        </View>
        {/* Retry Quiz button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Quiz");
          }}
          style={styles.btnReset}
        >
          <Text style={[styles.btnText,{fontWeight:500}]}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity:0.7
  },
  subContainer: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
  
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  score: {
    fontSize: 25,
    color: "#f01c8b",
    fontWeight: "bold",
  },
  btnReset: {
    backgroundColor: "#41b7d1",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    letterSpacing: 1,
    
  },
});
export default Result;