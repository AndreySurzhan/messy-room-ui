import { StyleSheet, SectionList, SectionListData } from "react-native";
import ChecklistItem from "./ChecklistItem";
import { useIsPortrait } from "@/hooks/orientation";
import { useDimensions } from "@/hooks/device";
import { SIZES } from "@/constants/layout";

export default function Checklist({
  items,
}: {
  items: SectionListData<string>[];
}) {
  const isPortrait = useIsPortrait();
  const { window } = useDimensions();
  const size = isPortrait
    ? { height: window.height - SIZES.PANEL.HEIGHT }
    : { width: window.width - SIZES.PANEL.WIDTH };

  return (
    <SectionList
      style={[styles.container, size]}
      contentContainerStyle={styles.contentContainer}
      sections={items}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => <ChecklistItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(201, 90, 90, 0.5)",
    zIndex: 1000,
    maxWidth: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingInline: 20,
    paddingBlock: 10,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  landscape: {
    marginRight: 200,
  },
  portrait: {
    marginBottom: 100,
  },
});
