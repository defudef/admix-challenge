import { ComponentStory } from '@storybook/react';
import SearchBar from './SearchBar';

export default {
  title: 'App/SearchBar',
  component: SearchBar,
};

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const Default = Template.bind({});
