import type AppMetrics from './AppMetrics';
import type StoreInfo from './StoreInfo';
import type { IsoDate } from './Metrics';

export default interface App {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  platform: 'mobile' | 'vr' | 'ar';
  googlePlayStoreInfo: StoreInfo;
  appStoreInfo: StoreInfo;
  avails: number;
  score: number;
  featured: boolean;
  isDeleted: boolean;
  createdAt: IsoDate;
  updatedAt: IsoDate;
  metrics: AppMetrics;
  storeCategories: string;
}
