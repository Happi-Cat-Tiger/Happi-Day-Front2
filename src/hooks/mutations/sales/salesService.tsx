import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { postSalesWriteApi, deleteSalesArticleApi, putSalesArticleApi } from '@/api/sales/salesApi';
import { SalesWritePayload } from '@/types/sales';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const usePostWriteSalesService = ({ categoryId }: { categoryId: number }) => {
  const router = useRouter();
  return useMutation({
    mutationFn: ({
      name,
      description,
      hashtags,
      startTime,
      endTime,
      accountName,
      accountUser,
      accountNumber,
      namePrice,
      products,
      deliveries,
      thumbnailImage,
      imageList,
    }: SalesWritePayload) =>
      postSalesWriteApi({
        categoryId,
        name,
        description,
        hashtags,
        startTime,
        endTime,
        accountName,
        accountUser,
        accountNumber,
        namePrice,
        products,
        deliveries,
        thumbnailImage,
        imageList,
      }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['sales', 'article'] });
      hdQueryClient.invalidateQueries({ queryKey: ['sales', 'articleList'] });

      // 작성한 글로 이동
      const { categoryId, salesId } = data;
      router.push(`/board/${categoryId}/${salesId}`);

      toast('글이 작성되었습니다.');
    },
  });
};

export const useDeleteSalesArticleService = ({ salesId }: { salesId: number }) => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => deleteSalesArticleApi({ salesId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['sales', 'article', true] });
      hdQueryClient.invalidateQueries({ queryKey: ['sales', 'articleList'] });
      toast('글이 삭제되었습니다.');
      router.push('/sales');
    },
  });
};

export const usePutSalesArticleService = ({ salesId }: { salesId: number | null }) => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      name,
      description,
      hashtags,
      startTime,
      endTime,
      accountName,
      accountUser,
      accountNumber,
      namePrice,
      products,
      deliveries,
      thumbnailImage,
      imageList,
    }: SalesWritePayload) =>
      putSalesArticleApi({
        salesId,
        name,
        description,
        hashtags,
        startTime,
        endTime,
        accountName,
        accountUser,
        accountNumber,
        namePrice,
        products,
        deliveries,
        thumbnailImage,
        imageList,
      }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'article'] });
      hdQueryClient.invalidateQueries({ queryKey: ['board', 'articleList'] });
      console.log(data);

      // 작성한 글로 이동
      const { categoryId, salesId } = data;
      router.push(`/sales/${categoryId}/${salesId}`);

      toast('글이 수정되었습니다.');
    },
  });
};
