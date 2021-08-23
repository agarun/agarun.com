import Script from 'next/script';
import { setColorModesOnLoadFunctionString } from '../lib/color-modes';

function ColorModesScript() {
  return (
    <Script
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `(${setColorModesOnLoadFunctionString()})()`,
      }}
    />
  );
}

export default ColorModesScript;
