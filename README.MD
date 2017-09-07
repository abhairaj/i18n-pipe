# i18n-pipe

## Installation

To install this library, run:

```bash
$ npm install i18n-pipe --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install i18n-pipe
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { I18nPipe } from 'i18n-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    I18nPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use pipe in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Abhai Raj](mailto:abhairaj@jotisoftware.com)
