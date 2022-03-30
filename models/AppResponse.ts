import type App from './App';

export default interface AppResponse {
  totalCount: number;
  items: App[];
  dau: number;
}
