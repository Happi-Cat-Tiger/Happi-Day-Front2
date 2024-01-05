'use client';
import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { QUILL_EDITOR } from '@/constants/editor';

interface CustomEditorProps {
  editValue: string;
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
}
const CustomEditor = ({ editValue, setEditValue }: CustomEditorProps) => {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  return (
    <ReactQuill
      theme="snow"
      defaultValue={editValue}
      onChange={setEditValue}
      modules={QUILL_EDITOR.modules}
      formats={QUILL_EDITOR.formats}
      className="h-full w-full overflow-auto"
    />
  );
};

export default CustomEditor;
