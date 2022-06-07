import { projectStore, projectFireStore, timestamp } from "../firebase/config";
import { useState, useEffect } from "react";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = projectStore.ref(file.name);
    const collectionRef = projectFireStore.collection('images');

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url, createdAt})
        setUrl(url);
      }
    );
  }, [file]);

  return { url, error, progress };
};

export default useStorage;