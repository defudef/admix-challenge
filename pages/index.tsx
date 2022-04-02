import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import SearchBar from '@ui-kit/SearchBar';
import PageLayout from 'components/PageLayout';
import AppsList from 'components/AppsList';
import useAppListQuery, { UseAppListQueryProps } from 'hooks/queries/useAppListQuery';
import useDebounce from 'hooks/useDebounce';

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const phrase = useDebounce(searchTerm, 500);

  const query = useMemo<UseAppListQueryProps>(() => ({
    pageIndex: 0,
    pageSize: 10,
    phrase,
  }), [phrase]);

  const { data, isLoading } = useAppListQuery(query);

  return (
    <PageLayout>
      <SearchBar value={searchTerm} onChange={({ currentTarget }) => setSearchTerm(currentTarget.value)} />
      <AppsList data={data?.data} isLoading={isLoading} phrase={phrase} />
    </PageLayout>
  );
}

export default Home;
