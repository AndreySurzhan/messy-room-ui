import { Image, View, Button, StyleSheet } from "react-native";
import PlaySpeechButton from './Buttons/PlaySpeechButton';
import Panel from './Panel';
import ShowChecklistButton from './Buttons/ShowChecklistButton';
import TakePictureButton from './Buttons/TakePictureButton';

export default function Picture({ uri, onPlaySpeech, onShowChecklist, onRetakePicture }: { uri: string, onPlaySpeech: () => void, onShowChecklist: () => void, onRetakePicture: () => void }) {
  return <View style={styles.container}>
    <Image source={{ uri }} style={styles.image} />

    <Panel>
      <PlaySpeechButton onPress={onPlaySpeech} />
      <ShowChecklistButton onPress={onShowChecklist} />
      <TakePictureButton onPress={onRetakePicture} />
    </Panel>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
