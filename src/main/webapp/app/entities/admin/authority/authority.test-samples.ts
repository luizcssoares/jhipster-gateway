import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e6a1ff2a-5c56-4bee-aafe-a685cb672add',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f57ab7e6-1b14-4c3b-9350-26de6017d08f',
};

export const sampleWithFullData: IAuthority = {
  name: '9dfab74b-8146-4dbb-a39c-7b4ee9683490',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
