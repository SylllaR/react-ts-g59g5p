import { GetProducts } from '../../constatnts';
import { call, put } from 'redux-saga/effects';
import firebaseData from '../../firebase';
import { get, ref } from '@firebase/database';

export function* getProducts() {
  const products = ref(firebaseData, 'products/');

  try {
    const response = yield call(function () {
      return new Promise(function (resolve, reject) {
        get(products).then((snap) => {
          const productArr = Object.values(snap.val());
          resolve(productArr);
        });
      });
    });

    yield put({
      type: GetProducts.SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: GetProducts.ERROR,
      payload: error,
    });
  }
}
