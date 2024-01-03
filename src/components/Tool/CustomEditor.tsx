'use client';
import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const CustomEditor = ({ initialData }: { initialData: string }) => {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

  const [editValue, setEditValue] = useState(initialData);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // font size
      [{ list: 'ordered' }, { list: 'bullet' }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ['link', 'image'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
    'color',
    'background',
    'size',
    'align',
  ];
  return (
    <ReactQuill
      theme="snow"
      defaultValue={editValue}
      onChange={setEditValue}
      modules={modules}
      formats={formats}
      className=" mx-auto mt-4 h-full w-full"
    />
  );
};

export default CustomEditor;