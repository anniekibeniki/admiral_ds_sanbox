import {
  Modal,
  ModalContent,
  ModalProps,
  ModalTitle,
  FileAttributeProps,
  FileItem,
  InputStatus,
  FileInput,
  ModalButtonPanel,
  Button,
  useToast,
} from "@admiral-ds/react-ui";

import React, { FC, useState } from "react";
import Styled, { halfWidthPositionMixin } from "./FileUploadModal.styles";

export const FileUploadModal: FC<ModalProps> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(
    new Map<File, FileAttributeProps>()
  );
  const [status, setStatus] = React.useState<InputStatus | undefined>(
    undefined
  );
  const { addToast } = useToast();

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const accept = ["image/*", ".pdf", "application/json"];
  const maxFilesNumber = 3;

  const handlePreviewIconClick = (file: File) => {
    console.warn(`Preview icon on file "${file.name}" was clicked`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(
      fileAttributesMap
    );
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (
        userSelectedFileList.findIndex((userFile) =>
          filesAreEqual(userFile, file)
        ) === -1
      ) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus("error");
    } else {
      setStatus(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith("image")
        ? URL.createObjectURL(file)
        : undefined;
      const onPreviewIconClick = file.type.startsWith("image")
        ? () => handlePreviewIconClick(file)
        : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: `${new Date().getTime()}`,
        fileName: file.name.substring(0, file.name.lastIndexOf(".")),
        fileType: file.type,
        fileSize: file.size,
        status: "Uploaded",
        errorMessage: "Что-то явно пошло не так...",
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter(
      (file) => !filesAreEqual(file, fileToRemove)
    );
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(
      fileAttributesMap
    );
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension="xl"
            filesLayoutCssMixin={halfWidthPositionMixin}
          />
        );
      }
      return null;
    });
  };

  const onUpload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast({
        status: "success",
        children: "Запрос выполнен успешно",
        title: "Загрузка файлов",
        isClosable: true,
        linkText: "Link",
        displayStatusIcon: true,
      });
      props.onClose!();
    }, 1000);
  };

  return (
    <Modal dimension="xl" {...props}>
      <ModalTitle>Загрузка файлов</ModalTitle>
      <ModalContent>
        <Styled.Form>
          <FileInput
            dimension={"xl"}
            title={`Загрузите не более 3-х файлов типа ${accept.join(", ")}`}
            ref={inputRef}
            onInput={handleChange}
            accept={accept.join(", ")}
            files={fileList}
            status={status}
          >
            {renderFileList()}
          </FileInput>
        </Styled.Form>
      </ModalContent>
      <ModalButtonPanel>
        <Button onClick={onUpload} dimension="s" loading={isLoading}>
          Загрузить
        </Button>
      </ModalButtonPanel>
    </Modal>
  );
};
