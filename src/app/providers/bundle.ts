import { Providers } from './index';

export class BundleProvider {
  loadManageScripts() {
    return Providers.ScriptLoader.loadScripts('body', [
      'assets/js/manage.bundle.js'], true);
  }

  loadThemeScripts() {
    return Providers.ScriptLoader.loadScripts('body', [
      'assets/js/theme.bundle.js'], true);
  }
}
