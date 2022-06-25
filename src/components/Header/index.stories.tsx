import { ComponentMeta } from '@storybook/react';
import Header, { HeaderProps } from './index';
import asStory from '~/helpers/asStory';
import useDarkMode from '~/hooks/useDarkMode';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const story = asStory(({ darkMode, ...props }: HeaderProps & { darkMode: boolean }) => {
  useDarkMode(darkMode);

  return (
    <Header {...props} />
  );
}, { darkMode: false });

export const Default = story();
export const Logged = story({ username: 'user' });
