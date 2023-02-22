import { GetUpdateVersion, GetGroups } from '../../constatnts';

export const getUpdateVersionAction = () => ({
  type: GetUpdateVersion.FETCH,
});

export const getGroupsAction = () => ({
  type: GetGroups.FETCH,
});
