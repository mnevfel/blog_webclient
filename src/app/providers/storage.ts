import { Providers } from "./index";

export class StorageProvider {
  Set(key, obj, encrypt = false) {
    var value = JSON.stringify(obj);
    try {
      if (encrypt) {
        value = Providers.Crypto.Encrypt(value);
      }
      localStorage.setItem(key, value);
    } catch (e) {
      return "";
    }
  }
  Get(key, decrypt = false) {
    try {
      var item = localStorage.getItem(key);
      if (item) {
        if (decrypt) {
          item = Providers.Crypto.Decrypt(item);
        }
        return JSON.parse(item);
      }
      return item;
    } catch (e) {
      return "";
    }
  }
  Remove(key) {
    localStorage.removeItem(key);
  }
}
