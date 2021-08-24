import Script from 'next/script';
import { setColorModeOnLoadFunctionString } from '../lib/color-modes';

function ColorModesScript() {
  return (
    <Script
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `(${setColorModeOnLoadFunctionString()})()`,
      }}
    />
  );
}

export default ColorModesScript;
