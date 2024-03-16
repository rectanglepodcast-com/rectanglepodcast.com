import { isBrowser } from '@builder.io/qwik/build';

serverOnly();

export function serverOnly() {
  if (isBrowser) {
    console.log('SERVER ONLY');
    throw new Error(
      'This module cannot be imported from the Client.' +
        'It should only be used from the Server.',
    );
  }
}
export default serverOnly;
