import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from './i18n.pipe';

export * from './i18n.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    I18nPipe
  ],
  exports: [
    I18nPipe
  ]
})
export class I18nModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: I18nModule,
      providers: []
    };
  }
}
