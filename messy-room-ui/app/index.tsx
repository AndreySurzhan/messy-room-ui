import { View, StyleSheet } from "react-native";
import Camera from "../components/Camera";
import { useState } from 'react';
import Picture from '../components/Picture';
import Checklist from '@/components/Checklist/Checklist';


const checklistItems = [
  "Remove all the trash",
  "Put away all the clothes",
  "Make the bed",
  "Clean the floor",
  "Clean the sink",
  "Clean the toilet",
  "Clean the shower",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
  "Clean the dishes",
];

export default function Index() {
  const [pictureUri, setPictureUri] = useState<string | null>(null);

  const handlePictureTaken = (uri: string) => {
    setPictureUri(uri);
  };

  const handleRetake = () => {
    setPictureUri(null);
  };

  const handlePlaySpeech = () => {
    console.log("Play speech");
  };

  const handleShowChecklist = () => {
    console.log("Show checklist");
  };

  return (
    <View style={styles.container}>
      <Checklist items={checklistItems} />

      {pictureUri ? <Picture uri={pictureUri} onPlaySpeech={handlePlaySpeech} onShowChecklist={handleShowChecklist} onRetakePicture={handleRetake} /> : <Camera onPictureTaken={handlePictureTaken} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
