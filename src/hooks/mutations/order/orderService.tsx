import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { updateOrderStatusApi, updateOrderCancleApi, deleteOrderApi } from '../../../api/order/orderApi';

export const updateOrderStatusService = ({
  salesId,
  orderId,
  orderStatus,
}: {
  salesId: number;
  orderId: number;
  orderStatus: object;
}) => {
  const mutation = useMutation({
    mutationFn: () => updateOrderStatusApi({ salesId, orderId, orderStatus }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['order', 'detail'] });
    },
  });
  return { mutation };
};

export const updateOrderCancelService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  const mutation = useMutation({
    mutationFn: () => updateOrderCancleApi({ salesId, orderId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['order', 'detail'] });
    },
  });
  return { mutation };
};

export const deleteOrderService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  const mutation = useMutation({
    mutationFn: () => deleteOrderApi({ salesId, orderId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['order', 'detail'] });
    },
  });
  return { mutation };
};
