import { resizeImage } from '@/utils/image';
import { onlineManager, useMutation } from "@tanstack/react-query";

const url = process.env.EXPO_PUBLIC_API_BASE_URL;

export type GetRoomCleanlinessStatusParams = {
  picture: string;
};

export type RoomCleanlinessStatus = {
  status: "clean" | "dirty";
  prompt: {
    text: string;
    speech: string;
  };
};

export const getRoomCleanlinessStatus = async ({
  picture,
}: GetRoomCleanlinessStatusParams): Promise<RoomCleanlinessStatus> => {
  try {
    const response = await fetch(`${url}/room-cleanliness-status`, {
      method: "POST",
      body: JSON.stringify({ picture }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch room status");
    }

    return response.json();
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export const useRoomCleanlinessStatus = () => {
  return useMutation({
    mutationFn: getRoomCleanlinessStatus,
    onError: console.error,
    onMutate: handleOnMutate,
  });
};

const handleOnMutate = async (params: GetRoomCleanlinessStatusParams) => {
  const { picture } = params;

  const resized = await resizeImage(picture);

  return { ...params, picture: resized };
};
