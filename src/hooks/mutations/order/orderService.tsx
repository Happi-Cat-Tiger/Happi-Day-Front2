import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { putOrderStatusApi, putOrderCancleApi, deleteOrderApi } from '@/api/order/orderApi';

export const putOrderStatusService = ({
  salesId,
  orderId,
  orderStatus,
}: {
  salesId: number;
  orderId: number;
  orderStatus: object;
}) => {
  const mutation = useMutation({
    mutationFn: () => putOrderStatusApi({ salesId, orderId, orderStatus }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['order', 'detail'] });
    },
  });
  return mutation;
};

export const putOrderCancelService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  const mutation = useMutation({
    mutationFn: () => putOrderCancleApi({ salesId, orderId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['order', 'detail'] });
    },
  });
  return mutation;
};

export const deleteOrderService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  const mutation = useMutation({
    mutationFn: () => deleteOrderApi({ salesId, orderId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['order', 'detail'] });
    },
  });
  return mutation;
};
