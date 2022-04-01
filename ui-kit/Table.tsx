import { styled } from '@mui/material/styles';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableBody from '@mui/material/TableBody';

export const TableContainer = styled(MuiTableContainer)();
export const Table = styled(MuiTable)();
export const TableHead = styled(MuiTableHead)();
export const TableRow = styled(MuiTableRow)();
export const TableCell = styled(MuiTableCell)(({ theme }) => ({
  padding: theme.spacing(6, 8),

  '&.MuiTableCell-body': {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '13px',
    color: theme.palette.grey[900],
  },
  '&.MuiTableCell-head': {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '12px',
    lineHeight: '24px',
    color: theme.palette.grey[500],
    textTransform: 'uppercase',
  },
}));
export const TableBody = styled(MuiTableBody)(({ theme }) => ({
  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.palette.grey[200],
  }
}));