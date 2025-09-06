import { translations } from '../constants/translations';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const changeTranslation = (path: string, currentLang: string) => {
  const keys = path.split('.');
  // value is the current translation object
  let value = (translations as any)[currentLang];

  for (const key of keys) {
    // verify if the key is a nested object (e.g., "menu.items.0")
    const arrayIndex = parseInt(key);

    if (!isNaN(arrayIndex)) {
      value = value[arrayIndex];
    } else {
      value = value[key];
    }
  }
  return value;
};
