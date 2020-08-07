import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import style from "./style";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={style.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={style.content}
      >
        <Text style={style.title}>Quer ser um Proffy?</Text>
        <Text style={style.description}>
          Para começar, você só precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={style.okButton}>
        <Text style={style.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
