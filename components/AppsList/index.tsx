import AppResponse from '@models/AppResponse';
import { styled } from '@mui/material/styles';
import Box from '@ui-kit/Box';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@ui-kit/Table';
import { TdOverflowEllipsis } from '@ui-kit/Text';
import { formatDate, numberToShortText } from 'utils/parsers';
import { genreToOrderedArray, withStoreInfo } from 'utils/transformers';
import ItemFeatured from './ItemFeatured';
import Status from './Status';
import TableDropdown from './TableDropdown';
import TitlePublisher from './TitlePublisher';

interface TableHeaderOptions {
  name: string;
  sort: boolean;
  width?: string;
}

const widths: Record<string, string> = {
  status: '65px',
  titlePublisher: '252px',
  menu: '24px',
};

const headerColumns: TableHeaderOptions[] = [
  { name: 'Status', sort: false, width: widths.status },
  { name: 'App title & publisher', sort: true, width: widths.titlePublisher },
  { name: '', sort: false },
  { name: 'Daily avails', sort: true },
  { name: 'Date added', sort: true },
  { name: 'Updated on', sort: true },
  { name: 'Age', sort: false },
  { name: 'Category', sort: false },
  { name: '', sort: false, width: widths.menu },
];

const Strong = styled('strong')(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textTransform: 'uppercase',
}));

interface AppsListProps {
  data: AppResponse | undefined;
}

const AppsList = ({ data }: AppsListProps) => {
  return (
    <Box>
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            {headerColumns.map(({ name, width }) => (
              <TableCell key={name} variant="head" {...(width && { sx: { width } })}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map(withStoreInfo).map(item => (
            <TableRow key={item._id}>
              <TableCell className="ellipsis">
                <Status isPublished={!item.isDeleted} />
              </TableCell>
              <TableCell>
                <TitlePublisher title={item.storeInfo?.title} publisher={item.storeInfo?.studio} image={item.storeInfo?.icon} />
              </TableCell>
              <TableCell>
                {item.featured && <ItemFeatured />}
              </TableCell>
              <TableCell>
                <Strong>{numberToShortText(item.avails ?? 0)}</Strong>
              </TableCell>
              <TableCell>{formatDate(item.createdAt)}</TableCell>
              <TableCell>{formatDate(item.updatedAt)}</TableCell>
              <TableCell>
                <Strong>{item.storeInfo?.contentRating}</Strong>
              </TableCell>
              <TableCell>
                <TdOverflowEllipsis>{genreToOrderedArray(item.storeInfo?.genre ?? '').join(', ')}</TdOverflowEllipsis>
              </TableCell>
              <TableCell>
                <TableDropdown _id={item._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
};

export default AppsList;
