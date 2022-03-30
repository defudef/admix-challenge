import AppResponse from '@models/AppResponse';
import Box from '@ui-kit/Box';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@ui-kit/Table';
import { formatDate, numberToShortText } from 'utils/parsers';
import { genreToOrderedArray, withStoreInfo } from 'utils/transformers';
import ItemFeatured from './ItemFeatured';
import Status from './Status';
import TitlePublisher from './TitlePublisher';

interface TableHeaderOptions {
  name: string;
  sort: boolean;
}

const headerColumns: TableHeaderOptions[] = [
  { name: 'Status', sort: false },
  { name: 'App title & publisher', sort: true },
  { name: '', sort: false },
  { name: 'Daily avails', sort: true },
  { name: 'Date added', sort: true },
  { name: 'Updated on', sort: true },
  { name: 'Age', sort: false },
  { name: 'Category', sort: false },
  { name: '', sort: false },
];

interface AppsListProps {
  data: AppResponse | undefined;
}

const AppsList = ({ data }: AppsListProps) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            {headerColumns.map(({ name }) => (
              <TableCell>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map(withStoreInfo).map(item => (
            <TableRow key={item._id}>
              {console.log(item.storeCategories, 'sfdfa')}
              <TableCell>
                <Status isPublished={!item.isDeleted} />
              </TableCell>
              <TableCell>
                <TitlePublisher title={item.title} />
              </TableCell>
              <TableCell>
                {item.featured && <ItemFeatured />}
              </TableCell>
              <TableCell>{numberToShortText(item.avails ?? 0)}</TableCell>
              <TableCell>{formatDate(item.createdAt)}</TableCell>
              <TableCell>{formatDate(item.updatedAt)}</TableCell>
              <TableCell>{item.storeInfo?.contentRating}</TableCell>
              <TableCell>{genreToOrderedArray(item.storeInfo?.genre ?? '').join(', ')}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
};

export default AppsList;
