import { ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Form/TextField',
  component: TextField,
};

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Write something here...',
};
