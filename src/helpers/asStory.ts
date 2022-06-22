import { Story } from '@storybook/react';

export default function asStory<Args>(component: Story<Args>, defaultArgs?: Args) {
  return (args?: Story<Args>['args']) => {
    const newComponent = component.bind({});
    newComponent.args = { ...defaultArgs, ...args };

    return newComponent;
  };
}
