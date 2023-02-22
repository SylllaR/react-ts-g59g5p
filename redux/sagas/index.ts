import { takeLatest } from 'redux-saga/effects';
import { GetUpdateVersion, GetGroups, GetProducts } from '../../constatnts';
import { getUpdateVersion, getGroups } from './init';
import { getProducts } from './products';

export default function* rootSaga() {
  yield takeLatest(GetUpdateVersion.FETCH, getUpdateVersion);
  yield takeLatest(GetGroups.FETCH, getGroups);
  yield takeLatest(GetProducts.FETCH, getProducts);
}
