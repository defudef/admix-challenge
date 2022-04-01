import { styled } from '@mui/material/styles';
import { TdOverflowEllipsis, TextOverflowEllipsis } from '@ui-kit/Text';
import NextImage from 'next/image';

interface Props {
  title?: string;
  publisher?: string;
  image?: string;
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),

  '.content': {
    display: 'flex',
    flexDirection: 'column',
  },

  '.title': {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '14px',
    color: theme.palette.primary.main,
  },
  '.publisher': {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '13px',
    lineHeight: '18px',
    color: theme.palette.grey[500],
  },
}))

const ImagePlaceholder = styled('span')(({ theme }) => ({
  display: 'block',
  width: '45px',
  height: '42px',
  background: theme.palette.grey[300],
  borderRadius: '8px',
}));

const Image = styled(NextImage)({
  borderRadius: '8px',
});

const TitlePublisher = ({ title, publisher, image }: Props) => (
  <Container>
    <div className="image">
      {image?.substring(0, 4) === 'http'
        ? <Image width={45} height={42} layout="fixed" alt={title} loading="lazy" src={image} />
        : <ImagePlaceholder />
      }
    </div>
    <div className="content">
      <TextOverflowEllipsis className="title">{title}</TextOverflowEllipsis>
      <TextOverflowEllipsis className="publisher">{publisher}</TextOverflowEllipsis>
    </div>
  </Container>
);

export default TitlePublisher;
