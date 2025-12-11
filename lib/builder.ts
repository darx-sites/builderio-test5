import { builder } from '@builder.io/react';

if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  throw new Error('NEXT_PUBLIC_BUILDER_API_KEY is not defined');
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export { builder };