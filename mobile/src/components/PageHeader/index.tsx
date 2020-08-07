import React from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

import style from "./style";
import { useNavigation } from "@react-navigation/native";

function handleGoBack() {}

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={style.container}>
      <View style={style.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"></Image>
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain"></Image>
      </View>

      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
