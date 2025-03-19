import { Pressable, StyleSheet, View } from 'react-native';
import BaseButton from './Base';

export default function PlaySpeechButton({ onPress }: { onPress: () => void }) {
  return <BaseButton onPress={onPress} color="green" />;
}
