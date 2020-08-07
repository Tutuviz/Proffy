import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import style from "./style";

import landingeImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigate("GiveClasses");
  }
  function handleNavigationToStudyPage() {
    navigate("Study");
  }

  return (
    <View style={style.container}>
      <Image source={landingeImg} style={style.banner} />

      <Text style={style.title}>
        Seja bem-vindo,{"\n"}
        <Text style={style.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={style.buttonContainer}>
        <RectButton
          onPress={handleNavigationToStudyPage}
          style={[style.button, style.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={style.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigationToGiveClassesPage}
          style={[style.button, style.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={style.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={style.totalConnections}>
        Total de 200 conexões já realizadas <Image source={heartIcon}></Image>
      </Text>
    </View>
  );
}

export default Landing;
