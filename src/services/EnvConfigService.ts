import config from 'react-native-config'

interface ApiConfig {
  apiUrl: string
}

export class EnvConfigService {
  public static get quotesConfig(): ApiConfig {
    return {
      apiUrl: String(config.QUOTES_API_URL).trim(),
    }
  }
}
