import { styled } from '@mui/material/styles';
import { memo } from 'react';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),

  '.dot': {
    display: 'block',
    width: '8px',
    height: '8px',
    backgroundColor: theme.palette.info.main,
    borderRadius: '50%',
  },
  '.text': {
    color: theme.palette.grey[900],
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const ItemFeatured = memo(() => (
  <Container>
    <span className="dot" />
    <span className="text">Featured</span>
  </Container>
));

export default ItemFeatured;
