import { setColorModeOnLoadFunctionString } from '../lib/color-modes';

function ColorModesScript() {
  // Since `next/script` gets appended to the body, we can't
  // use it here because it would still execute too late.
  // https://github.com/vercel/next.js/blob/f78ebd089583de485cbffd253a67ab3dbdd2a088/packages/next/client/script.tsx#L104
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(${setColorModeOnLoadFunctionString()})()`,
      }}
    />
  );
}

export default ColorModesScript;
