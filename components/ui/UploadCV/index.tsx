import Text from "components/common/Text";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
type Props = {
  preview?: string;
  setPreview: (prev: string) => void;
};
export default ({ preview, setPreview }: Props) => {
  const [errors, setErrors] = useState("");
  const [fileName, setFileName] = useState("");
  const onDrop = useCallback(async ([file]) => {
    if (file) {
      //   const fileName = file.name.split(".")[0];
      //   const fileType = file.name.split(".")[1];

      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
      //   const askServer = await fetch.post("/api/uploadimg", {
      //     fileName,
      //     fileType,
      //   });

      //   const returnData = askServer.data.data.returnData;
      //   const signedRequest = returnData.signedRequest;
      //   const url = returnData.url;
      //   await setUrl(url);
      //   const options = {
      //     headers: {
      //       "Content-Type": fileType,
      //     },
      //   };

      //   const sendFile = await axios.put(signedRequest, file, options);

      // uploadFile({ variables: { file } });
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
    accept: ".pdf",
    maxSize: 1024000,
  });

  return (
    <Wrapper {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      {preview ? (
        <>
          <Image width={100} height={100} src={"/images/cv.png"} />
          <Text variant="subheadingSmall">{fileName}</Text>
        </>
      ) : (
        <>
          <Image width={100} height={100} src={"/images/uploadCV.png"} />
          <Text variant="subheadingSmall">
            Upload your CV. We accept pdf only.
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
