import type App from '@models/App';
import type StoreInfo from '@models/StoreInfo';

export const withStoreInfo = (app: App): App & { storeInfo?: StoreInfo } => ({
  ...app,
  storeInfo: app.appStoreInfo ?? app.googlePlayStoreInfo
});

export const genreToOrderedArray = (genre: string): string[] => {
  const set = new Set<string>(genre
    .split(',')
    .map(entity => entity.trim())
    .sort()
  );

  return [...set];
}
