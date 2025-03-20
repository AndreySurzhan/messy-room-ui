import BaseButton from "./Base";

export default function TakePictureButton({
  onPress,
}: {
  onPress: () => void;
}) {
  return <BaseButton onPress={onPress} color="white" />;
}
