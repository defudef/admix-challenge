import { memo } from 'react';
import Switch from '@ui-kit/Switch';

interface Props {
  isPublished: boolean
}

const Status = memo(({ isPublished }: Props) => (
  <Switch checked={isPublished} disableTouchRipple />
));

export default Status;
