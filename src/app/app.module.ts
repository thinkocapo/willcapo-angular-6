import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducers, AppState } from './store/reducers/index';
import { storeLogger } from 'ngrx-store-logger';
import { ActionReducerMap, ActionReducer } from '@ngrx/store';
// import { ModalContactMeComponent } from './modal-contact-me/modal-contact-me.component';


export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
} 
export const metaReducers = environment.production ? [] : [logger];


@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    StoreModule.forRoot( // NgRx sets up a Store and sets up each reducer as a thing that can edit the store. sets the initial states
      reducers,
      {metaReducers}
    ),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  // declarations: [AppComponent, ModalContactMeComponent],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
