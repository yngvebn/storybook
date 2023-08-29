// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore import is aliased in webpack config
import OriginalNextImage from 'sb-original/next/image';
import type * as _NextImage from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ImageContext } from '@storybook/nextjs/dist/image-context';
import { defaultLoader } from './next-image-default-loader';

const MockedNextImage = ({ loader, ...props }: _NextImage.ImageProps) => {
  const imageParameters = React.useContext(ImageContext);

  return <OriginalNextImage {...imageParameters} {...props} loader={loader ?? defaultLoader} />;
};

export default MockedNextImage;
