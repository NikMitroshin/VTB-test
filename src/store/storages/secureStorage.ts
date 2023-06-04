import { Storage } from 'redux-persist'
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'

const config = {
  accessible: ACCESSIBLE.WHEN_UNLOCKED,
}

class SecureStorage implements Storage {
  async getItem(key: string): Promise<string | null> {
    return RNSecureStorage.get(key)
  }

  async setItem(key: string, value: string): Promise<string | null> {
    return RNSecureStorage.set(key, value, config)
  }

  async removeItem(key: string): Promise<string | null> {
    return RNSecureStorage.remove(key)
  }
}

const secureStorage = new SecureStorage()

export default secureStorage
