import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 18256,
  login: 'GVdyTZ@z\\)tXtQH\\}QC8m-c',
};

export const sampleWithPartialData: IUser = {
  id: 23807,
  login: ".Fr7s`@P16LJt\\gHe\\klbR\\'OWX\\_o-ZZXF\\[4RyT",
};

export const sampleWithFullData: IUser = {
  id: 16383,
  login: '5H',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
