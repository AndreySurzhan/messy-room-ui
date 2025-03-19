import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(ScreenOrientation.Orientation.UNKNOWN);

  useEffect(() => {
    const getInitialOrientation = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(orientation);
    };

    getInitialOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener((orientation) => {
      setOrientation(orientation.orientationInfo.orientation);
    });

    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  return orientation;
};
