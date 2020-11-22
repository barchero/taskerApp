export interface EnvironmentEntity {
  production: boolean;
  logoUrl: string;
  api: {
    url: string;
  };
  i18n: {
    defaultLang: string;
    availableLangs: string[];
  };
}
