import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import DictionaryContext from "../context/DictionaryContext";

export default function AudioPlay() {
  let { pronounce }: any = React.useContext(DictionaryContext);
  const [sound, setSound] = useState<any>();
  async function playRemoteSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: `${pronounce.audio}`,
    });
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableHighlight underlayColor={"transparent"} onPress={playRemoteSound}>
      <AntDesign name="playcircleo" size={30} color="blue" />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({});
