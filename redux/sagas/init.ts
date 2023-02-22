import { GetUpdateVersion, GetGroups } from '../../constatnts';
import { call, put } from 'redux-saga/effects';
import firebaseData from '../../firebase';
import { get, ref } from '@firebase/database';

export function* getUpdateVersion() {
  const updateVersion = ref(firebaseData, 'updateVersion/');

  try {
    const response = yield call(function () {
      return new Promise(function (resolve, reject) {
        get(updateVersion).then((snap) => {
          resolve(snap.val());
        });
      });
    });

    yield put({
      type: GetUpdateVersion.SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: GetUpdateVersion.ERROR,
      payload: error,
    });
  }
}

export function* getGroups() {
  const groups = ref(firebaseData, 'groups/');

  try {
    const response = yield call(function () {
      return new Promise(function (resolve, reject) {
        get(groups).then((snap) => {
          resolve(Object.values(snap.val()));
        });
      });
    });

    yield put({
      type: GetGroups.SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: GetGroups.ERROR,
      payload: error,
    });
  }
}
