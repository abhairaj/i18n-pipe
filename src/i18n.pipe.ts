import { Injectable, PipeTransform, Pipe } from '@angular/core';

declare function require(url: string);

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  transform(key: string, params: any[]): string {
    var lang = (window.navigator.language || 'en').substring(0, 2);
    var path: string[] = key.split('.');
    var result = this.value(lang, path, params)
    return result ? result : this.value('en', path, params)
  }

  private value(lang: string, path: string[], params: string[]): string {
    var root = null;
    try { root = require('../assets/i18n/' + lang + '.json') } catch (err) { return null }
    var result = root[path[0]];
    for (var i = 1; i < path.length; i++) {
      result = result ? result[path[i]] : result
    }
    for (var i = 0; params && i < params.length; i++) {
      result = result.replace('\{' + i + '\}', params[i])
    }
    return result ? result : lang == 'en' ? 'no i18n for \'' + path.join('.') + '\'' : null;
  }

}
