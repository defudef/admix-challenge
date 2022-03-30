import { memo } from 'react';

interface Props {
  isPublished: boolean
}

const Status = memo(({ isPublished }: Props) => (
  <>
    {isPublished ? 'published' : 'disabled'}
  </>
));

export default Status;
