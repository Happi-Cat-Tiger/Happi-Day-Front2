import { useMutation } from 'react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { postBoardWriteApi } from '@/api/board/boardApi';

export const postWriteBoardService = ({ categoryId }: { categoryId: number }) => {
  const mutation = useMutation({
    mutationFn: ({
      title,
      content,
      hashtag,
      eventAddress,
      thumbnailImage,
      imageFile,
    }: {
      title: string;
      content: string;
      hashtag: string[];
      eventAddress: string;
      thumbnailImage: File | null;
      imageFile: File[] | null;
    }) => postBoardWriteApi({ categoryId, title, content, hashtag, eventAddress, thumbnailImage, imageFile }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article', categoryId] });
    },
  });
  return mutation;
};
