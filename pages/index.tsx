import type { NextPage } from 'next';
import PageLayout from 'components/PageLayout';
import SearchBar from '@ui-kit/SearchBar';
import AppsList from 'components/AppsList';
import useAppsMutation from 'hooks/queries/useAppsMutation';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { mutate, data } = useAppsMutation();

  useEffect(() => {
    mutate({
      pageIndex: 0,
      pageSize: 10,
    });
  }, [mutate]);

  return (
    <PageLayout>
      <SearchBar />
      <AppsList data={data?.data} />
    </PageLayout>
  );
}

export default Home
