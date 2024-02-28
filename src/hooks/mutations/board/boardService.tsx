import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { deleteBoardArticleApi, patchBoardArticleApi, postBoardWriteApi } from '@/api/board/boardApi';
import { toast } from 'react-toastify';

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
      eventAddress: { address: string; detailAddress: string };
      thumbnailImage: File | null;
      imageFile: File[] | null;
    }) => postBoardWriteApi({ categoryId, title, content, hashtag, eventAddress, thumbnailImage, imageFile }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
    },
  });
  return mutation;
};

export const deleteBoardArticleService = ({ articleId }: { articleId: number }) => {
  const mutation = useMutation({
    mutationFn: () => deleteBoardArticleApi({ articleId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
      toast('글이 삭제되었습니다.');
    },
  });
  return mutation;
};

export const patchBoardArticleService = ({ articleId }: { articleId: number | null }) => {
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
      eventAddress: { address: string; detailAddress: string };
      thumbnailImage: File | null;
      imageFile: File[] | null;
    }) => patchBoardArticleApi({ articleId, title, content, hashtag, eventAddress, thumbnailImage, imageFile }),
    onSuccess: () => {
      // hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
    },
  });
  return mutation;
};
