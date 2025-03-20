import { useEffect, useMemo, useState } from "react";
import { Dimensions } from "react-native";

export const useDimensions = () => {
  const windowDimensions = useMemo(() => Dimensions.get("window"), []);
  const screenDimensions = useMemo(() => Dimensions.get("screen"), []);
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", setDimensions);

    return subscription?.remove;
  }, []);

  return dimensions;
};
