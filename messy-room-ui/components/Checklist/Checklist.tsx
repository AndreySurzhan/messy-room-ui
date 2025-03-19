import { View } from 'react-native';
import ChecklistItem from './ChecklistItem';

export default function Checklist({ items }: { items: string[] }) {
  return <View>
    {items.map((item) => (
      <ChecklistItem key={item} item={item} />
    ))}
  </View>;
}

