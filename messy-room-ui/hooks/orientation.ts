import { useEffect, useState, useCallback } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(ScreenOrientation.Orientation.UNKNOWN);

  const getInitialOrientation = useCallback(async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();

    setOrientation(orientation);
  }, []);

  useEffect(() => {

    getInitialOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener((orientation) => {
      setOrientation(orientation.orientationInfo.orientation);
    });

    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  return orientation;
};

export const useIsPortrait = () => {
  const orientation = useOrientation();
  const portraitOrientations = [ScreenOrientation.Orientation.PORTRAIT_UP, ScreenOrientation.Orientation.PORTRAIT_DOWN];

  return portraitOrientations.includes(orientation);
};
