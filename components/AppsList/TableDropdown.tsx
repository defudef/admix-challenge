import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMemo, useState } from 'react';
import MenuDotsIcon from '@assets/icons/menu-dots.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  _id: string;
}

const Button = styled(MuiButton)({
  minWidth: '32px',
  marginLeft: '-18px',
});

const TableDropdown = ({ _id }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]) ;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Image src={MenuDotsIcon} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href={`/app/${_id}`}>
          <MenuItem>Edit</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default TableDropdown;
