import {EnvironmentEntity} from '@ui/model/entities/Environment.entity';

export const environment: EnvironmentEntity = {
  production: true,
  logoUrl: './assets/img/logo.png',
  api: {
    url: 'http://localhost:8080'
  },
  i18n: {
    defaultLang: 'es',
    availableLangs: ['es']
  }
};
