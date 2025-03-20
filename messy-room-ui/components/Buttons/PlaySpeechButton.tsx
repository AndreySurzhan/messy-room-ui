import BaseButton from "./Base";

export default function PlaySpeechButton({ onPress }: { onPress: () => void }) {
  return <BaseButton onPress={onPress} color="green" />;
}
