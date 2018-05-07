import { h, Component } from 'preact';

export default class Banner extends Component {
  constructor() {
    super(window);
    this.state = {
      answered: false
    };
    this.handleAllow = this.handleAllow.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
  }

  get text() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.text) ||
      'This website is using Cookies to improve your browsing experience.'
    );
  }

  get privacyPolicyText() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.text) ||
      'Cookie Policy'
    );
  }

  get privacyPolicyUrl() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.text) ||
      '/disclaimer'
    );
  }

  get denyText() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.text) ||
      'Disable Cookies'
    );
  }

  get allowText() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.text) ||
      'Accept'
    );
  }

  handleAllow() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    document.cookie = `cookieconsent_status=allow; expires=${expiry.toUTCString()}`;
    this.setState({ answered: true });
  }

  handleDeny() {
    document.cookie = `cookieconsent_status=deny`;
    this.setState({ answered: true });
  }

  render() {
    const useCustomStyles =
      window.noat &&
      window.noat.cookieConsent &&
      window.noat.cookieConsent.useCustomCSS
        ? {}
        : null;

    return (
      <div
        className="noat-cookie__consent"
        style={
          useCustomStyles || {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            transition: 'transform .3s ease-out',
            transform: `translateY(${this.state.answered ? '100%' : '0'})`
          }
        }
      >
        <div
          className="noat-cookie-consent__banner"
          style={
            useCustomStyles || {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1em',
              fontFamily: 'Sans-Serif',
              background: 'rgba(0,0,0,.8)',
              color: ' #fafafa'
            }
          }
        >
          <span
            className="noat-cookie-consent-banner__text"
            style={
              useCustomStyles || {
                alignSelf: 'center'
              }
            }
          >
            {this.text}
          </span>
          <span
            className="noat-cookie-consent-banner__other-actions"
            style={
              useCustomStyles || {
                flexGrow: 1,
                padding: '0 2em',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                opacity: 0.8,
                fontSize: '75%'
              }
            }
          >
            <a
              className="noat-cookie-consent-banner-other-actions__privacy-policy"
              style={
                useCustomStyles || {
                  color: 'inherit'
                }
              }
              target="newPricayPolicy"
              href={this.privacyPolicyUrl}
            >
              {this.privacyPolicyText}
            </a>

            <a
              className="noat-cookie-consent-banner-other-actions__deny"
              style={
                useCustomStyles || {
                  color: 'inherit'
                }
              }
              href="#"
              onClick={this.handleDeny}
            >
              {this.denyText}
            </a>
          </span>
          <span
            className="noat-cookie-consent-banner__allow"
            style={
              useCustomStyles || {
                display: 'flex',
                alignItems: 'center',
                padding: '0 2em',
                background: '#38e',
                borderRadius: '4px',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }
            }
            onClick={this.handleAllow}
          >
            {this.allowText}
          </span>
        </div>
      </div>
    );
  }
}
