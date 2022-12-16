import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "@components/CustomButton";

const CameraAndGallery = (props: any) => {
  const { msg, type } = props;

  return (
    <SafeAreaView style={[styles.container]}>

      <CustomButton title={"Camera"} backgroundColor={"white"} textColor={"black"} />
      <CustomButton title={"Gallery"} backgroundColor={"white"} textColor={"black"} />
      <CustomButton title={"Cancel"} backgroundColor={"white"} textColor={"black"} />
    </SafeAreaView>
  );
};
export default CameraAndGallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 10,
    // alignItems: 'flex-end',
  },
  tvMsg: {},
});
