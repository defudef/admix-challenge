import { IsoDate } from '@models/Metrics';

export const formatDate = (isoDate: IsoDate): string => {
  const date = new Date(isoDate);

  return `${date.getDay()}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
};

export const numberToShortText = (amount: number): string => {
  const removeTrailingZero = (strAmount: string): string => strAmount.replace('.0', '');

  if (amount >= 1_000_000) {
    return `${removeTrailingZero((amount / 1_000_000).toFixed(1))}M`;
  }

  if (amount >= 1000) {
    return `${removeTrailingZero((amount / 1000).toFixed(1))}K`;
  }

  return String(amount);
}