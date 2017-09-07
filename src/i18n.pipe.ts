import { environment as env } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  private urlBase: string;
  private defaultLang: string;

  constructor(private http: HttpClient) {
    this.urlBase = env.i18nPipe.urlBase || 'assets/i18n/';
    this.defaultLang = env.i18nPipe.defaultLang || 'en';
  }

  transform(key: string, params: any[]): any {
    var lang = (window.navigator.language || 'en').substring(0, 2);
    var path: string[] = key.split('.');

    return this.http.get(this.urlBase + lang + '.json')
      .map(res => {
        if (res) {
          var value = this.value(res, lang, path, params)
          if (value) {
            return value;
          } else {
            throw ('no value for ' + key + '@' + this.urlBase + lang + '.json');
            //return this.default(path, params);
          }
        } else {
          throw ('no file @' + this.urlBase + lang + '.json');
          //return this.default(path, params);
        }
      })
      .catch(err => {
        return this.default(path, params);
      });
  }

  private value(root: any, lang: string, path: string[], params: string[]): string {
    var result = root[path[0]];
    for (var i = 1; i < path.length; i++) {
      result = result ? result[path[i]] : result
    }
    for (var i = 0; result && params && i < params.length; i++) {
      result = result.replace('\{' + i + '\}', params[i])
    }
    return result ? result : lang == this.defaultLang ? 'no value for \'' + path.join('.') + '\' in ' + this.urlBase + lang + '.json' : null;
    //return result ? result : 'no value for \'' + path.join('.') + '\' in ' + this.urlBase + lang + '.json' ;
  }

  private default(path: string[], params: string[]): any {
    return this.http.get(this.urlBase + this.defaultLang + '.json')
      .map(res => {
        return this.value(res, this.defaultLang, path, params)
      });
  }

}
