export const COLOR_MODE_KEY = 'theme';
export const DARK_MODE = 'dark';
export const LIGHT_MODE = 'light';
export const COLOR_MODES = [LIGHT_MODE, DARK_MODE];
export const SHOULD_USE_PREFERENCE_QUERY = false;

export const setColorModeIntoStyles = (mode) => {
  if (!COLOR_MODES.includes(mode)) {
    console.warn('Unsupported color mode.');
  }

  document.body.classList.add(mode);
  document.body.classList.remove(mode === DARK_MODE ? LIGHT_MODE : DARK_MODE);
};
export const setColorModeIntoStorage = (mode) => {
  localStorage.setItem(COLOR_MODE_KEY, mode);
};

export const initialColorMode = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const mql = window.matchMedia(preferDarkQuery);
  const supportsColorSchemeQuery =
    SHOULD_USE_PREFERENCE_QUERY && mql.media === preferDarkQuery;

  let localStorageColorMode = null;
  try {
    localStorageColorMode = localStorage.getItem(COLOR_MODE_KEY);
  } catch (error) {
    console.warn('LocalStorage is disabled.');
    console.error(error);
  }
  const localStorageExists = localStorageColorMode !== null;

  if (localStorageExists) {
    setColorModeIntoStyles(localStorageColorMode);
    return localStorageColorMode;
  } else if (supportsColorSchemeQuery) {
    const mode = mql.matches ? DARK_MODE : LIGHT_MODE;
    setColorModeIntoStyles(mode);
    setColorModeIntoStorage(mode);
    return mode;
  } else {
    const mode = document.body.classList.contains(DARK_MODE)
      ? DARK_MODE
      : LIGHT_MODE;
    setColorModeIntoStorage(mode);
    return mode;
  }
};

/**
 * Detect the initial color mode for the client and apply
 * it to both the `<body>` and `LocalStorage` (if it's `dark`)
 *
 * Note: we specifically use `var` here because this code
 * will be injected directly (without compilation) into the
 * `<body>` to prevent a flash of unstyled content.
 *
 * Note: we can't use the constants (e.g. `COLOR_MODE_KEY`)
 * inline because we want to export *and* include them in the
 * JavaScript in `index.html`. See `setColorModeOnLoadFunctionString` below
 */
export function setColorModeOnLoad() {
  var localStorageColorModeKey = '{COLOR_MODE_KEY}';
  var classNameDarkMode = '{DARK_MODE}';
  var classNameLightMode = '{LIGHT_MODE}';
  var shouldUsePreferenceQuery = '{SHOULD_USE_PREFERENCE_QUERY}';

  function setColorModeIntoStyles(isDarkMode) {
    document.body.classList.add(
      isDarkMode ? classNameDarkMode : classNameLightMode
    );
    document.body.classList.remove(
      isDarkMode ? classNameLightMode : classNameDarkMode
    );
  }

  function setColorModeIntoStorage(isDarkMode) {
    localStorage.setItem(
      localStorageColorModeKey,
      isDarkMode ? classNameDarkMode : classNameLightMode
    );
  }

  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery =
    shouldUsePreferenceQuery && mql.media === preferDarkQuery;

  var localStorageColorMode = null;
  try {
    localStorageColorMode = localStorage.getItem(localStorageColorModeKey);
  } catch (error) {
    console.error(error);
  }
  var localStorageExists = localStorageColorMode !== null;

  if (localStorageExists) {
    setColorModeIntoStyles(localStorageColorMode === classNameDarkMode);
  } else if (supportsColorSchemeQuery) {
    setColorModeIntoStyles(mql.matches);
    setColorModeIntoStorage(mql.matches);
  } else {
    var isDarkMode = document.body.classList.contains(classNameDarkMode);
    setColorModeIntoStorage(isDarkMode);
  }
}

export function setColorModeOnLoadFunctionString() {
  return String(setColorModeOnLoad)
    .replace('{COLOR_MODE_KEY}', COLOR_MODE_KEY)
    .replace('{DARK_MODE}', DARK_MODE)
    .replace('{LIGHT_MODE}', LIGHT_MODE)
    .replace("'{SHOULD_USE_PREFERENCE_QUERY}'", SHOULD_USE_PREFERENCE_QUERY);
}
