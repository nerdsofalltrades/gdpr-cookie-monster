import { h, render } from 'preact';
import Cookie from 'cookie';
import Banner from './components/banner';

window.addEventListener('load', () => {
  const cookies = Cookie.parse(document.cookie);
  const settings = window.document.getElementById('noat-cookie-consent__setup');

  if (settings) {
    settings.addEventListener('click', () => {
      render(<Banner />, document.body);
    });
  }

  if (cookies.cookieconsent_status) {
    return;
  }
  render(<Banner />, document.body);
});
