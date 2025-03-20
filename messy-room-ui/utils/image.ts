import { ImageManipulator } from "expo-image-manipulator";
import { MAX_SIZE } from "../constants/image";

export const resizeImage = async (imageUri: string) => {
  const context = await ImageManipulator.manipulate(imageUri);
  const image = await context.renderAsync();
  const height = image.height;
  const width = image.width;
  const ratio = height / width;

  const newHeight = height > width ? MAX_SIZE : MAX_SIZE / ratio;
  const newWidth = width > height ? MAX_SIZE : MAX_SIZE / ratio;

  const resized = await context.resize({
    width: newWidth,
    height: newHeight,
  });

  const result = await resized.renderAsync();
  const saved = await result.saveAsync();

  return saved.uri;
};
