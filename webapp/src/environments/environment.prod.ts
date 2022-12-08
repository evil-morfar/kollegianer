import {environment as shared} from './environment.shared';

export const environment = {
  production: true,
  firebaseConfig: shared.firebaseConfig,
  useEmulators: false,
};
