declare module '*.svg' {
  // eslint-disable-next-line sort-imports
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  const content: string;
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.pdf';
