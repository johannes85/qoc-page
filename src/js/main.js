import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

  // root: 'body',
  // autoShow: true,
  // disablePageInteraction: true,
  // hideFromBots: true,
  // mode: 'opt-in',
  // revision: 0,

  cookie: {
    name: 'cc_cookie',
    // domain: location.hostname,
    // path: '/',
    // sameSite: "Lax",
    // expiresAfterDays: 182,
  },

  // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
  guiOptions: {
    consentModal: {
      layout: 'cloud inline',
      position: 'bottom center',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },

  onFirstConsent: ({cookie}) => {
    console.log('onFirstConsent fired',cookie);
  },

  onConsent: ({cookie}) => {
    console.log('onConsent fired!', cookie)
  },

  onChange: ({changedCategories, changedServices}) => {
    console.log('onChange fired!', changedCategories, changedServices);
  },

  onModalReady: ({modalName}) => {
    console.log('ready:', modalName);
  },

  onModalShow: ({modalName}) => {
    console.log('visible:', modalName);
  },

  onModalHide: ({modalName}) => {
    console.log('hidden:', modalName);
  },

  categories: {
    necessary: {
      enabled: true,  // this category is enabled by default
      readOnly: true  // this category cannot be disabled
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^_ga/,   // regex: match all cookies starting with '_ga'
          },
          {
            name: '_gid',   // string: exact cookie name
          }
        ]
      },

      // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
      services: {
        ga: {
          label: 'Google Analytics',
          onAccept: () => {},
          onReject: () => {}
        }
      }
    }
  },

  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          description: 'Diese Webseite verwendet Cookies und andere Technologien um die Nutzererfahrung zu verbessern.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          showPreferencesBtn: 'Einstellungen anpassen',
          // closeIconLabel: 'Reject all and close modal',
          /*footer: `
                        <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                        <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    `,*/
        },
        preferencesModal: {
          title: 'Cookie Einstellungen anpassen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Auswahl speichern',
          closeIconLabel: 'Fenster schließen',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Unbedingt erforderlich',
              description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Statistiken',
              description: 'Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten werden anonymisiert und können nicht dazu verwendet werden, Sie zu identifizieren.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});