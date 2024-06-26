/// <reference types="nativewind/types" />

/* @flow */

declare module 'react-native-android-sms-listener' {
  export default {
    addListener(listener: (message: {
      originatingAddress: string,
      body: string,
      timestamp: number
    }) => void): {
      remove(): void
    }
  }
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.gif' {
  const content: any;
  export default content;
}