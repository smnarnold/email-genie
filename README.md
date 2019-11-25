# Email Genie
Allows autocomplete on email field by providing a list of domain suggestions (gmail.com, outlook.com, etc.). This package is lightweight, flexible, compatible with libraries (jQuery, etc) / frameworks (React, Angular, Vue, etc) and maximize native behaviors on desktop AND mobile browsers.

🚫 Dependencies
🚫 HTML Wrapper
🚫 CSS injected

<p align="center">
  <img src="https://media.giphy.com/media/RJsurNsgJeaMGkIyz9/giphy.gif">
</p>

Installation
------------
```shell
npm i email-genie
```
Import
-----
```js
import EmailGenie from 'email-genie';
```

Usage with text selector
-----
```js
const email = new EmailGenie('.email');
```

Usage with dom element
-----
```js
const elem = document.querySelector('.email')
const field = new EmailGenie(elem);
```

Add custom domains
-----
```js
const field = new EmailGenie('.email', {
  domains: ['videotron.ca'],
  appendToDomains: true
});
```

Options
-----
| Option  | Description                                  |
| ------- | -------------------------------------------- |
| `domains` | All email domains you want to autocomplete for. Defaults to a predefined array of email domains. |
| `appendToDomains` | Wether the domains in the setting should be append to the default one or replace them all together at false |
| `appendToDomains` | Wether the domains in the setting should be append to the default one or replace them all together at false |
| `insert` | Where the datalist generated should be outputed. |

<p align="center">
  <img src="https://i.smnarnold.com/email-genie/email-genie-logo.png" alt="Email Genie">
</p>
