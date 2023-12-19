# ui-api-sdk
SDK to expose a UI API for consumption by the Fabulate extension.

## Usage
```js
import {sendMessage, onMessage} from '@fabulate/ui-api-sdk';

const resp = await sendMessage({ type: 'ping' });
```