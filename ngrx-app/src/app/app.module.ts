import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Reducers } from './store/reducers/index.reducers';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects/index.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(Reducers,
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      }),
    EffectsModule.forRoot(Effects),
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
