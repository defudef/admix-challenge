import styled from '@emotion/styled';
import { CreateStyled } from '@emotion/styled/types/base';
import { FC, memo, ReactNode } from 'react';

export const TextOverflowEllipsis = styled('span')({
  display: 'block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

const TdOverflowEllipsisContainer = styled('span')({
  position: 'relative',
  maxWidth: '100%',
  padding: '0 !important',
  display: "flex",
  verticalAlign: 'text-bottom !important',

  '&:after': {
    content: '"-"',
    display: 'inline',
    visibility: 'hidden',
    width: 0,
  },

  '.child': {
    position: 'absolute',
    whiteSpace: 'nowrap',
    overflowY: 'visible',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
    MsTextOverflow: 'ellipsis',
    OTextOverflow: 'ellipsis',
    maxWidth: '100%',
    minWidth: 0,
    width: '100%',
    top: 0,
    left: 0,

    '&:after': {
      content: '"-"',
      display: 'inline',
      visibility: 'hidden',
      width: 0,
    },
  },
});
export const TdOverflowEllipsis: FC<Partial<typeof TdOverflowEllipsisContainer>> = memo(({ children, ...props }) => (
  <TdOverflowEllipsisContainer {...props}>
    <span className="child">
      {children}
    </span>
  </TdOverflowEllipsisContainer>
));