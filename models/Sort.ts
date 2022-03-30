import type AppRequest from './AppRequest';

export default interface Sort {
  field: keyof AppRequest;
  desc: boolean;
}
