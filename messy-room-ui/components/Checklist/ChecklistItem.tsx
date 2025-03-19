import { View, Text } from 'react-native';

export default function ChecklistItem({ item }: { item: string }) {
  return <View>
    <Text>{item}</Text>
  </View>;
}

