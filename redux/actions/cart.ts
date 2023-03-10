import { Cart, AddProduct, CartModal } from '../../constatnts';

export const getCartAmountAction = () => ({
  type: Cart.FETCH,
});

export const openCartModalAction = (payload: boolean) => ({
  type: CartModal.OPEN,
  payload,
});

export const cancelAllOrdersAction = () => ({
  type: CartModal.CANCEL_ALL,
});

export const addProductAction = () => ({
  type: AddProduct.FETCH,
});
