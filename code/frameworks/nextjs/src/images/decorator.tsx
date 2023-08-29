import * as React from 'react';
import type { Addon_StoryContext } from '@storybook/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ImageContext } from '@storybook/nextjs/dist/image-context';

export const ImageDecorator = (
  Story: React.FC,
  { parameters }: Addon_StoryContext
): React.ReactNode => {
  if (!parameters.nextjs?.image) {
    return <Story />;
  }

  return (
    <ImageContext.Provider value={parameters.nextjs.image}>
      <Story />
    </ImageContext.Provider>
  );
};
