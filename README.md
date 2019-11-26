# Email Genie
Allows autocomplete on email field by providing a list of domain suggestions (gmail.com, outlook.com, etc.). This package is lightweight, flexible, compatible with libraries (jQuery, etc) / frameworks (React, Angular, Vue, etc) and maximize native behaviors on desktop AND mobile browsers.

👍 Lite 5kb (2kb Gzipped)
⚡ Fast Native JavaScript
🚫 No Dependencies
🚫 No HTML Wrapper
🚫 No CSS injected

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

Usage
-----
### Text selector
```js
const email = new EmailGenie('.email');
```

### Vanilla JS
```js
const elem = document.querySelector('.email')
const field = new EmailGenie(elem);
```

### jQuery
```js
const field = new EmailGenie($('.email'));
```

Add custom domains
-----
```js
const field = new EmailGenie('.email', {
  domains: ['videotron.ca', 'aol.com'],
});
```

Options
-----
| Option  | Default | Possibilities | Description |
| ------- | ------- | ------------- | ----------- |
| domains | ['gmail.com', 'outlook.com', 'hotmail.com', 'msn.com', 'live.com', 'googlemail.com', 'yahoo.com', 'me.com', 'icloud.com'] | [] | Array of domains suggestions. _(By default, this array will be added to the default domains suggestions. View overrideDomains option to override instead.)_ |
| overrideDomains | false | Boolean _(true/false)_ | Wether the domains suggestions array should override the default one. |
| insert | 'afterend' | 'beforebegin', 'afterend', 'documentend'  | Where the datalist generated should be inserted: Before the input, after the input, at the end of the document. |

Support
-----
Chrome, Firefox, Safari, Edge, IE 11

<p align="center">
  <img src="https://i.smnarnold.com/email-genie/email-genie-logo.png" alt="Email Genie">
</p>
