import { ScriptLoaderProvider } from './script-loader';
import { ValidationProvider } from './validation';
import { NotifyProvider } from './notify';
import { BundleProvider } from './bundle';
import { StorageProvider } from './storage';
import { LocationProvider } from './location';
import { OperationProvider } from './operation';
import { DateTimeProvider } from './datetime';
import { LogicProvider } from './logic';
import { ComponentProvider } from './component';
import { CryptoProvider } from './crypto';
import { ElementProvider } from './element';
import { HelperProvider } from './helper';


export * from './http';

export class Providers {
  static ScriptLoader = new ScriptLoaderProvider();
  static Helper = new HelperProvider();
  static Validation = new ValidationProvider();
  static Notify = new NotifyProvider();
  static Bundle = new BundleProvider();
  static Storage = new StorageProvider();
  static Location = new LocationProvider();
  static Operation = new OperationProvider();
  static DateTime = new DateTimeProvider();
  static Logic = new LogicProvider();
  static Component = new ComponentProvider();
  static Crypto = new CryptoProvider();
  static Element = new ElementProvider();
}
