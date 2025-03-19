import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable, LayoutChangeEvent } from 'react-native';
import TakePictureButton from './Buttons/TakePictureButton';
import Panel from './Panel';
import * as ScreenOrientation from "expo-screen-orientation";

export default function Camera({ onPictureTaken }: { onPictureTaken: (uri: string) => void }) {
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(ScreenOrientation.Orientation.UNKNOWN);

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    onPictureTaken(photo?.uri ?? "");
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setOrientation(width > height ? ScreenOrientation.Orientation.LANDSCAPE_RIGHT : ScreenOrientation.Orientation.PORTRAIT_UP);
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <CameraView
        ref={ref}
        mode={"picture"}
        facing={"back"}
        mute
        responsiveOrientationWhenOrientationLocked
        style={styles.camera}
      >
        <Text style={{ color: "white", fontSize: 35 }}>{orientation}</Text>
        <Panel>
          <TakePictureButton onPress={takePicture} />
        </Panel>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});
