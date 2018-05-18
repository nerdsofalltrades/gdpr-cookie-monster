# GDPR Cookie Monster

[![Build Status](https://api.travis-ci.org/nerdsofalltrades/gdpr-cookie-monster.svg?branch=master)](https://travis-ci.org/nerdsofalltrades/gdpr-cookie-monster)
[![Greenkeeper badge](https://badges.greenkeeper.io/nerdsofalltrades/gdpr-cookie-monster.svg)](https://greenkeeper.io/)

A minimal EU-GDPR compliant cookie consent banner for websites and shops (5.6K
gzipped).

This is Open-Source Software under MIT license. Use it, change it, copy it,
break it. But don't sell it as your's.

## Try it

```
$ npm i
$ npm start
```

## Use it straight away in your Shop/ Website

Add the following `script` tag to your website, right before the closing
`</body>` tag:

```
<script language="javascript" src="dist/gdpr-cookie-monster.min.js"></script>
```

Reload the page and a banner should appear at the bottom.

## Reopening banner

The banner asks for permission to store cookies once per session for cookie
deniers and once a month for cookie approvers.

To allow the user to change his mind (must have with GDPR-compliance) you must
add a link in at least the footer of your page (every page):

```
<a href="#" id="noat-cookie-consent__setup">Cookie Settings</a>
```

This is the re-open link
🤙 <a href="#" id="noat-cookie-consent__setup">I am the magic link</a>
(does not work on GitHub).

## Customization

### Custom texts

Add the following code right before the `gdpr-cookie-monster` script tag:

```
<script>
if (!window.noat) {
  window.noat = {};
}
window.noat.cookieConsent = {
  text: 'Use your text why you are using Cookies here',
  privacyPolicyText: 'The title of the cookie policy link',
  privacyPolicyUrl: 'The URL to the cookie policy',
  deny: 'The deny button title',
  allow: 'The allow button title'
};
</script>
```

### Custom styles

Add the following code right before the `gdpr-cookie-monster` script tag:

```
<script>
if (!window.noat) {
  window.noat = {};
}
window.noat.cookieConsent = {
  // ... keep settings from above here
  useCustomCSS: true
};
</script>
```

If you are a CSS guru now you can style everythi:ng on your own:

* .noat-cookie\_\_consent
* .noat-cookie-consent\_\_banner
* .noat-cookie-consent-banner\_\_text
* .noat-cookie-consent-banner\_\_other-actions
* .noat-cookie-consent-banner-other-actions\_\_privacy-policy
* .noat-cookie-consent-banner-other-actions\_\_deny
* .noat-cookie-consent-banner\_\_allow

## See it live

* https://nerdsofalltrad.es
* https://uhrwerk.berlin

## Legal Notice

WE ARE NO LAWYERS. SINCE THIS IS OPEN-SOURCE SOFTWARE, CUSTOMIZABLE AND
IMPOSSIBLE TO TRACK HOW IT IS USED WE CANNOT GIVE ANY WARRANTY OR PROMISE
THAT THIS PIECE OF SOFTWARE IS FULLY GDPR COMPLIANT.

Please contribute if you find issues.
