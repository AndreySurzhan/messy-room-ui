import BaseButton from "./Base";

export default function ShowChecklistButton({
  onPress,
}: {
  onPress: () => void;
}) {
  return <BaseButton onPress={onPress} color="orange" />;
}
