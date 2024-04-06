import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import data from "../data";
import ProgressBar from "../Components/ProgressBar";
import Questions from "../Components/Questions";

const Quiz = ({ navigation }) => {
  const allQuestions = data;



  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(3); // Initial countdown value (in seconds)

  useEffect(() => {
 
    let count = 3; 
    const intervalIds = [];

  
    for (let i = 0; i <= 3; i++) {
    
      const intervalId = setInterval(() => {
        count -= 1; 
        setTimer(count);

      
        if (count === 0) {
          clearInterval(intervalId);
          intervalIds.forEach(clearInterval);
        }
      }, 1000);

      intervalIds.push(intervalId);
    }

  
    return () => {
      intervalIds.forEach(clearInterval); 
    };
  }, []);

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };
  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled == false) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];

      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOption == correct_option) {
        setScore(score + 1);
      }
    }
  };
  const handleNext = (navigation) => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      navigation.navigate("Result", { score: score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1900,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  const renderOptions = (navigation) => {
    return (
      <View style={{ marginTop: 40 }}>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => validateAnswer(option, navigation)}
              key={index}
              style={[
                { ...styles.optionsText },
                {

                  padding:20,
                  borderRadius:30,
                  backgroundColor: isOptionsDisabled
                    ? option == correctOption
                      ? "#7be25b"
                      : option == currentOptionSelected
                      ? "#f0222b" //red
                      : "#cfcdcc" //gray
                    : "#90e0ef",

                    
                },
              ]}
            >
              <Text
               allowFontScaling={false}
                style={{
                  fontSize: 16,
                  color: "black",
                  textAlign: "center",
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    );
  };

  
  return (
    <ScrollView style={styles.scrollView}>
       
       <ImageBackground source={require("../assets/h2.jpg")} style={{height:Dimensions.get('screen').height,opacity:0.9}}>
       {/* <Text style={{textAlign:"center",fontSize:25,fontWeight:800,marginTop:40}}> QUIZ </Text> */}
       <View style={styles.container}>
  
        <View style={styles.subContainer}>
          <ProgressBar progress={progress} />

          <Questions
            index={currentQuestionIndex}
            question={allQuestions[currentQuestionIndex]?.question}
          />
        </View>
        {renderOptions(navigation)}


        <View style={{ alignItems:"center",marginTop:20 }}>

<TouchableOpacity
  style={[
    { ...styles.btnNext },
    {
      backgroundColor: !currentOptionSelected ? "#e5e5e5" : "#ffafcc",
    },
  ]}
  disabled={!currentOptionSelected}
  onPress={() => handleNext(navigation)}
>
  <Text allowFontScaling={false} style={styles.btnNextText}>NEXT</Text>
</TouchableOpacity>
  </View>
          </View>
        
       </ImageBackground>
          
        

   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
   
  },
  subContainer: {
    marginTop: 20,
    marginVertical: 10,
    padding: 40,
   
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  optionsText: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnNext: {
    borderRadius: 30,
    width: Dimensions.get('screen').width * 0.5,
    backgroundColor: "#ffffff",
    padding:20,
    alignItems:"center"
  },
  btnNextText: {
    color: "#333",
    fontSize: 17,
    letterSpacing: 1.1,
  },
});
export default Quiz;
