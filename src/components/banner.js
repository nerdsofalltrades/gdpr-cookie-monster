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
        window.noat.cookieConsent.privacyPolicyText) ||
      'Cookie Policy'
    );
  }

  get privacyPolicyUrl() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.privacyPolicyUrl) ||
      '/disclaimer'
    );
  }

  get denyText() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.denyText) ||
      'Disable Cookies'
    );
  }

  get allowText() {
    return (
      (window.noat &&
        window.noat.cookieConsent &&
        window.noat.cookieConsent.allowText) ||
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
    const isMobile = window.innerWidth < 640;
    return (
      <div
        className="noat-cookie__consent"
        style={
          useCustomStyles || {
            ...{
              position: 'fixed',
              zIndex: 2147483647,
              bottom: 0,
              left: 0,
              right: 0,
              transition: 'transform .3s ease-out',
              transform: `translateY(${this.state.answered ? '100%' : '0'})`
            },
            /* eslint-disable indent */
            ...(isMobile ? {} : {})
            /* eslint-enable indent */
          }
        }
      >
        <div
          className="noat-cookie-consent__banner"
          style={
            useCustomStyles || {
              ...{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1em',
                fontFamily: 'Sans-Serif',
                background: 'rgba(0,0,0,.8)',
                color: ' #fafafa'
              },
              /* eslint-disable indent */
              ...(isMobile
                ? {
                    flexFlow: 'column'
                  }
                : {})
              /* eslint-enable indent */
            }
          }
        >
          <span
            className="noat-cookie-consent-banner__text"
            style={
              useCustomStyles || {
                ...{
                  alignSelf: 'center'
                },
                /* eslint-disable indent */
                ...(isMobile ? {} : {})
                /* eslint-enable indent */
              }
            }
          >
            {this.text}
          </span>
          <span
            className="noat-cookie-consent-banner__other-actions"
            style={
              useCustomStyles || {
                ...{
                  flexGrow: 1,
                  padding: '0 2em',
                  display: 'flex',
                  flexFlow: 'column',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  opacity: 0.8,
                  fontSize: '75%'
                },
                /* eslint-disable indent */
                ...(isMobile
                  ? {
                      padding: '1em 0'
                    }
                  : {})
                /* eslint-enable indent */
              }
            }
          >
            <a
              className="noat-cookie-consent-banner-other-actions__privacy-policy"
              style={
                useCustomStyles || {
                  ...{
                    color: 'inherit'
                  },
                  /* eslint-disable indent */
                  ...(isMobile ? {} : {})
                  /* eslint-enable indent */
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
                  ...{
                    color: 'inherit'
                  },
                  /* eslint-disable indent */
                  ...(isMobile ? {} : {})
                  /* eslint-enable indent */
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
                ...{
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'center',
                  maxHeight: '5em',
                  minHeight: '5em',
                  padding: '0 2em',
                  background: '#38e',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                },
                /* eslint-disable indent */
                ...(isMobile
                  ? {
                      justifyContent: 'center',
                      alignSelf: 'auto'
                    }
                  : {})
                /* eslint-enable indent */
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
