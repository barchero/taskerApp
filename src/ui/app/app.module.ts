import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// *******************************************************************************
// NgBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// NgxTranslate
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


// *******************************************************************************
// App
import {httpInterceptorProviders} from '@ui/app/utils/interceptors';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';

// *******************************************************************************
//

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),

    // App
    AppRoutingModule
  ],

  providers: [
    httpInterceptorProviders,
    Title
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
