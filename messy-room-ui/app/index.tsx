import { View, StyleSheet } from "react-native";
import Camera from "../components/Camera";
import { useState } from 'react';
import Picture from '../components/Picture';
import ShowChecklistButton from '../components/Buttons/ShowChecklistButton';
import PlaySpeechButton from '../components/Buttons/PlaySpeechButton';
import TakePictureButton from '../components/Buttons/TakePictureButton';
import Panel from '../components/Panel';

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
