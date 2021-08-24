import { minify } from 'terser';
import { setColorModeOnLoadFunctionString } from '../lib/color-modes';

const scriptCode = setColorModeOnLoadFunctionString();

export function minifyColorModesScript() {
  // Since `next/script` gets appended to the body, we can't
  // use it here because it would execute too late
  // (https://github.com/vercel/next.js/blob/f78ebd089583de485cbffd253a67ab3dbdd2a088/packages/next/client/script.tsx#L104)
  // We use Terser instead:
  return minify(scriptCode);
}

function ColorModesScript({ code }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(${code})()`,
      }}
    />
  );
}

export default ColorModesScript;
