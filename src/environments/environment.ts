// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  rest: { baseUrl: 'localhost:3000/' },
  twilio: {
    baseUrl: 'https://api.twilio.com/2010-04-01/',
    sid: 'AC4b0b0cbccd02c8e9d21ac501c77580f7',
    authToken: 'f156d329a1d1a41de5036342cce7ce95',
    from: '+15755876577 ',
    defaultMediaUrl: 'http://haciendayoga.org/img/yb9-gr.jpg'
  },
  i18nPipe: {
    urlBase: 'assets/i18n/',
    defaultLang: 'en'
  }
};
