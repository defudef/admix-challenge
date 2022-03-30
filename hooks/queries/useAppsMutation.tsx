import AppResponse from '@models/AppResponse';
import type Filter from '@models/Filter';
import type Sort from '@models/Sort';
import { useMutation, UseMutationOptions } from 'react-query';
import { post } from 'utils/apiRequest';

export interface UseAppMutationRequest {
  pageIndex?: number;
  pageSize?: number;
  operator?: 'and' | 'or';
  filters?: Filter[];
  sorts?: Sort[];
}

type UseAppMutationResponse = { data: AppResponse };

const useAppsMutation = (options?: UseMutationOptions<UseAppMutationResponse, unknown,UseAppMutationRequest>) => (
  useMutation<UseAppMutationResponse, unknown, UseAppMutationRequest>(post<UseAppMutationRequest, UseAppMutationResponse>('fetch'), options)
);

export default useAppsMutation;
