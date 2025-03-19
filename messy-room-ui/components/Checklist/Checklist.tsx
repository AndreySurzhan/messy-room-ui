import { ScrollView, StyleSheet } from 'react-native';
import ChecklistItem from './ChecklistItem';

export default function Checklist({ items }: { items: string[] }) {
  return <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
    {items.map((item, index) => (
      <ChecklistItem key={index} item={item} />
    ))}
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
});
