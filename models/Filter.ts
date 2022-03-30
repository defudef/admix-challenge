import type AppRequest from './AppRequest';

export default interface Filter {
  name: keyof AppRequest;
  value: AppRequest[keyof AppRequest] | Array<AppRequest[keyof AppRequest]>;
  operator: 'gt' | 'lt' | 'eq' | 'like' | 'in';
}
