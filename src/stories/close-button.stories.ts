import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { CloseButtonComponent } from './close-button.component';

const meta: Meta<CloseButtonComponent> = {
  title: 'Actions/Close Button',
  component: CloseButtonComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/angular/writing-docs/docs-page
  tags: ['autodocs'],
  render: (args: CloseButtonComponent) => ({ props: args }),
  decorators: [moduleMetadata({ imports: [CommonModule] })],
  parameters: {
    componentSubtitle: '@a3-digital/ui-core',
    docs: {
      description: {
        component: 'Used by user to dismiss content - Page Level MicroApps',
      },
    },
  },
  argTypes: {
    // foo is the property we want to remove from the UI
    onClose: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<CloseButtonComponent>;

export const Primary: Story = {
  args: {
    top: 0,
    right: 0,
  },
};
