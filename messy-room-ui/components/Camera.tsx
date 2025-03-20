import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  LayoutChangeEvent,
} from "react-native";
import TakePictureButton from "./Buttons/TakePictureButton";
import Panel from "./Panel";
import { useIsPortrait } from "../hooks/orientation";
import { useRoomCleanlinessStatus } from "../services/room-status";
export default function Camera({
  onPictureTaken,
}: {
  onPictureTaken: (uri: string) => void;
}) {
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const isPortrait = useIsPortrait();
  const { mutate: getRoomCleanlinessStatus } = useRoomCleanlinessStatus();

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

    if (photo?.uri) {
      onPictureTaken(photo.uri);

      const result = await getRoomCleanlinessStatus({ picture: photo.uri });

      console.log(result);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={ref}
        mode={"picture"}
        facing={"back"}
        mute
        responsiveOrientationWhenOrientationLocked
        style={styles.camera}
      >
        <Text style={{ color: "white", fontSize: 35 }}>
          {isPortrait ? "Portrait" : "Landscape"}
        </Text>
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
  },
});
