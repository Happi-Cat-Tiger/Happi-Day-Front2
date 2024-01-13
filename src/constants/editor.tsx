export const QUILL_EDITOR: { modules: { toolbar: any[] }; formats: string[] } = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // font size
      [{ list: 'ordered' }, { list: 'bullet' }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ['link', 'image'],
    ],
  },
  formats: [
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
  ],
};
