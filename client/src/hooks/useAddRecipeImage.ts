import { CameraResultType, CameraSource } from "@capacitor/core";
import { useCamera } from "@ionic/react-hooks/camera";
import { useState } from "react";

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

export function useAddRecipeImage() {
  const [photos, setPhotos] = useState<Photo>();
  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const newPhotos = {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath,
    };

    console.log("webPath", cameraPhoto.webPath);
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
  };
}
