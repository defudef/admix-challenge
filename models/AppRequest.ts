import type App from './App';

type AppPickedFields = '_id' | 'title' | 'avails' | 'score' | 'platform' | 'storeCategories';

type AppRequest = Partial<Pick<App, AppPickedFields>> & {
  geos?: string[];
  updatedAt?: Date;
  createdAt?: Date;
}

export default AppRequest;
