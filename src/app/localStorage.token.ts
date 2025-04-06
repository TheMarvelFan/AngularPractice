import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE_TOKEN = new InjectionToken<any>('local storage');

export function localStorageFactory() {
  return typeof window !== 'undefined' ? localStorage : null;
}
