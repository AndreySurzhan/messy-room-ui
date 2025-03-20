import { View, StyleSheet, SectionListData } from "react-native";
import Camera from "../components/Camera";
import { useState } from 'react';
import Picture from '../components/Picture';
import Checklist from '@/components/Checklist/Checklist';

const checklistItems: SectionListData<string>[] = [
  {
    title: "Clean up checklist",
    data: [
      "Remove all the trash",
      "Put away all the clothes, test test test test test test test ",
      "Make the bed",
      "Clean the floor",
      "Clean the sink",
      "Clean the toilet",
      "Clean the shower",
      "Clean the dishes 1",
      "Clean the dishes 2",
      "Clean the dishes 3",
      "Clean the dishes 4",
      "Clean the dishes 5",
      "Clean the dishes 6",
      "Clean the dishes 7",
      "Clean the dishes 8",
      "Clean the dishes 9",
      "Clean the dishes 10",
      "Clean the dishes 11",
      "Clean the dishes 12",
    ],
  },
];

export default function Index() {
  const [pictureUri, setPictureUri] = useState<string | null>(null);
  const [checklistVisible, setChecklistVisible] = useState(false);

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
    setChecklistVisible(!checklistVisible);
  };

  return (
    <View style={styles.container}>
      {checklistVisible && <Checklist items={checklistItems} />}

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
