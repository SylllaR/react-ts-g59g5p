import { GetUpdateVersion, GetGroups } from '../../constatnts';
import init from '../store/init';

export default function (state = init, action) {
  switch (action.type) {
    case GetUpdateVersion.FETCH:
    case GetGroups.FETCH:
      return {
        ...state,
        fetching: true,
      };

    case GetUpdateVersion.SUCCESS:
      return {
        ...state,
        updateVersion: action.payload,
        fetching: false,
      };

    case GetGroups.SUCCESS:
      return {
        ...state,
        groups: action.payload,
        fetching: false,
      };

    case GetUpdateVersion.ERROR:
    case GetGroups.ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
}
