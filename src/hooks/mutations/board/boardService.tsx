import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { deleteBoardArticleApi, postBoardWriteApi, putBoardArticleApi } from '@/api/board/boardApi';
import { toast } from 'react-toastify';
import { BoardWritePayload } from '@/api/board/type';
import { useRouter } from 'next/navigation';
import { BOARD } from '@/constants/board';

export const usePostWriteBoardService = ({ categoryId }: { categoryId: number }) => {
  const router = useRouter();
  return useMutation({
    mutationFn: ({ title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }: BoardWritePayload) =>
      postBoardWriteApi({ categoryId, title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'articleList'] });

      // 작성한 글로 이동
      const { categoryId, id } = data;
      const categoryPath = BOARD.CATEGORY[categoryId - 1].path;
      router.push(`/board/${categoryPath}/${id}`);

      toast('글이 작성되었습니다.');
    },
  });
};

export const useDeleteBoardArticleService = ({ articleId }: { articleId: number }) => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => deleteBoardArticleApi({ articleId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'articleList'] });
      toast('글이 삭제되었습니다.');
      router.push('/board');
    },
  });
};

export const usePutBoardArticleService = ({ articleId }: { articleId: number | null }) => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }: BoardWritePayload) =>
      putBoardArticleApi({ articleId, title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'articleList'] });
      console.log(data);

      // 작성한 글로 이동
      const { categoryId, id } = data;
      const categoryPath = BOARD.CATEGORY[categoryId - 1].path;
      router.push(`/board/${categoryPath}/${id}`);

      toast('글이 수정되었습니다.');
    },
  });
};
