import { CameraResultType, CameraSource } from "@capacitor/core";
import { useCamera } from "@ionic/react-hooks/camera";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { storage } from "../config/firebaseConfig";

export interface Photo {
  filepath: string;
  webviewPath: string;
}

type SetValue = ReturnType<typeof useForm>["setValue"];

export function useAddRecipeImage(setValue: SetValue) {
  const [photo, setPhotos] = useState<string>();
  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const newPhoto = {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath || "",
    };

    console.log("webPath", cameraPhoto.webPath);
    const url = await upLoadToFirebase(newPhoto);

    setPhotos(url);
    setValue("img", url, { shouldDirty: true, shouldValidate: true });
  };

  return {
    photo,
    takePhoto,
  };
}

async function upLoadToFirebase(newPhoto: Photo) {
  // get blob
  const blob = await fetch(newPhoto.webviewPath).then((r) => r.blob());

  // upload to firebase
  const imgRef = storage.ref().child(`images/${newPhoto.filepath}`);

  await imgRef.put(blob).then((snap) => {
    console.log({ snap });
  });

  const url = await imgRef.getDownloadURL();

  return url;
}
