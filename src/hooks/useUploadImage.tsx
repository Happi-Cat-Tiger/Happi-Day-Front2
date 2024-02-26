'use client';
import { Dispatch, SetStateAction, ChangeEvent, DragEvent, useState, useCallback } from 'react';

interface Props {
  setImgFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleChange?: (value: File) => void;
}
// 이미지 업로드 함수 & 미리보기 이미지 hook
const useUploadImage = ({ setImgFile, handleChange }: Props) => {
  const [uploadedImage, setUploadedImage] = useState<any>(null); // preview image state

  const handleChangeImage = useCallback((file: File) => {
    // img customizing
    const { name, type } = file;
    const size = (file.size / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedImage({ name, size, type });

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage({ name, size, type, imageUrl: String(reader.result) });
      if (handleChange) handleChange(file);
    };
    reader.readAsDataURL(file);
  }, []);

  // drag & drop
  const handleDrop = useCallback((e: DragEvent<HTMLLabelElement>, setActive?: Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];

    if (file && file.type.includes('image')) {
      setImgFile(file);
      handleChangeImage(file);
    }
    if (setActive) setActive(false);
  }, []);

  // 이미지 첨부하기
  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>, setActive?: Dispatch<SetStateAction<boolean>>) => {
      e.preventDefault();
      const file = e.target?.files?.[0];
      // image 파일이 맞다면 imgFile에 file을 저장하고, 이미지 url 정보를 가져오는 함수를 호출
      if (file && file.type.includes('image')) {
        setImgFile(file);
        handleChangeImage(file);
      } else console.error('No file selected');
      if (setActive) setActive(false);
    },
    [],
  );

  return { uploadedImage, handleDrop, handleUpload };
};

export default useUploadImage;
