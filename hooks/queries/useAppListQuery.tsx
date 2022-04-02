import AppResponse from '@models/AppResponse';
import type Filter from '@models/Filter';
import type Sort from '@models/Sort';
import { useQuery } from 'react-query';
import { post } from 'utils/apiRequest';

export interface UseAppListQueryRequest {
  pageIndex?: number;
  pageSize?: number;
  operator?: 'and' | 'or';
  filters?: Filter[];
  sorts?: Sort[];
}

type UseAppListQueryResponse = { data: AppResponse };

export interface UseAppListQueryProps {
  phrase: string;
  pageIndex: number;
  pageSize: number;
}

const transformBody = (data: UseAppListQueryProps): UseAppListQueryRequest => ({
  pageIndex: data.pageIndex,
  pageSize: data.pageSize,
  ...(data.phrase && {
    operator: 'or',
    filters: [
      // {
      //   name: '_id',
      //   value: data.phrase,
      //   // value: `%${data.phrase}%`,
      //   operator: 'like'
      // },
      {
        name: 'title',
        value: data.phrase,
        operator: 'like',
      },
    ],
  }),
});

const useAppListQuery = (props: UseAppListQueryProps) => useQuery<UseAppListQueryResponse, UseAppListQueryRequest>(
  ['fetch', props],
  post<UseAppListQueryRequest, UseAppListQueryResponse, UseAppListQueryProps>('fetch', () => transformBody(props)),
);

export default useAppListQuery;
