import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { UnicornsActions } from '../actions/unicorns.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { Unicorn } from '../interfaces/unicorns.interface';

@Injectable({
  providedIn: 'root'
})

export class UnicornsEffects {

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) {
  }

  $getUnicorns = createEffect(() => this.actions$.pipe(
    ofType(UnicornsActions.getUnicornsList),
    exhaustMap(() => {
      return this.httpClient.get<Array<Unicorn>>('http://localhost:3000/unicorns').pipe(
        map((unicorns: Array<Unicorn>) => {
          return UnicornsActions.setUnicornsList(unicorns);
        })
      );
    })
  ));
}
