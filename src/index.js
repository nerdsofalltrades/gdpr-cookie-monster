import { h, render } from 'preact';
import Cookie from 'cookie';
import Banner from './components/banner';

window.addEventListener('load', () => {
  const cookies = Cookie.parse(document.cookie);
  const setupSelector = 'noat-cookie-consent__setup';
  const settings =
    window.document.getElementById(setupSelector) ||
    window.document.querySelector(`.${setupSelector}`);

  if (settings) {
    settings.addEventListener('click', e => {
      e.stopPropagation();
      render(<Banner />, document.body);
    });
  }

  if (cookies.cookieconsent_status) {
    return;
  }
  render(<Banner />, document.body);
});
