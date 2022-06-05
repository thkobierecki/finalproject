import Text from "components/common/Text";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import storage from 'utils/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
type Props = {
  preview?: string;
  setPreview: (prev: string) => void;
};
export default ({ preview, setPreview }: Props) => {
  const [errors, setErrors] = useState("");
  const [fileName, setFileName] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const handleUpload = (file:any) => {
    if (!file) {
        alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/logos/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setDownloadUrl(url);
                setPreview(url);
            });
        }
    );
};
  const onDrop = useCallback(async ([file]) => {
    if (file) {
      setFileName(file.name);
      handleUpload(file);
    } else {
      console.log("error");
      setErrors("Something went wrong. Check file type and size (max. 1 MB)");
    }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ['.jpeg', '.png'],
    maxSize: 1024000,
  });
console.log(preview)
  return (
    <Wrapper {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      {preview ? (
        <>
          <Image width={100} height={100} src={preview? preview : "/images/cv.png"} />
        </>
      ) : (
        <>
          <Image width={100} height={100} src={"/images/uploadCV.png"} />
          <Text variant="subheadingSmall">
            Upload your logo.
          </Text>
        </>
      )}
      <input {...getInputProps()} />
    </Wrapper>
  );
};

const Wrapper = styled.div<any>`
  margin-top: 20px;
  height: 150px;
  width: 100%;
  background-color: #fff;
  border: 2px dashed rgb(187, 186, 186);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
