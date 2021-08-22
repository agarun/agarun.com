export const COLOR_MODE_KEY = 'theme';
export const DARK_MODE = 'dark';
export const LIGHT_MODE = 'light';

export function setColorModesOnLoadFunctionString() {
  return String(setColorModesOnLoad)
    .replace('{COLOR_MODE_KEY}', COLOR_MODE_KEY)
    .replace('{DARK_MODE}', DARK_MODE)
    .replace('{LIGHT_MODE}', LIGHT_MODE);
}

export function setColorModesOnLoad() {
  var localStorageColorModeKey = '{COLOR_MODE_KEY}';
  var classNameDarkMode = '{DARK_MODE}';
  var classNameLightMode = '{LIGHT_MODE}';

  function setColorModesStyles(isDarkMode) {
    document.body.classList.add(
      isDarkMode ? classNameDarkMode : classNameLightMode
    );
    document.body.classList.remove(
      isDarkMode ? classNameLightMode : classNameDarkMode
    );
  }

  function setColorModesStorage(isDarkMode) {
    localStorage.setItem(
      localStorageColorModeKey,
      isDarkMode ? classNameDarkMode : classNameLightMode
    );
  }

  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;

  var localStorageColorMode = null;
  try {
    localStorageColorMode = localStorage.getItem(localStorageColorModeKey);
  } catch (error) {
    console.error(error);
  }
  var localStorageExists = localStorageColorMode !== null;

  if (localStorageExists) {
    setColorModesStyles(localStorageColorMode === classNameDarkMode);
  } else if (supportsColorSchemeQuery) {
    setColorModesStyles(mql.matches);
    setColorModesStorage(mql.matches);
  } else {
    var isDarkMode = document.body.classList.contains(classNameDarkMode);
    setColorModesStorage(isDarkMode);
  }
}
