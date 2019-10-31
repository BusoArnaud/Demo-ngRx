import { Component, OnInit } from '@angular/core';
import { UnicornsActions } from './store/actions/unicorns.actions';
import { AppState } from './store/app.state';
import { select, Store } from '@ngrx/store';
import {
  selectEvenUnicornsIdList,
  selectUnicornsList,
} from './store/selectors/unicorns.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(UnicornsActions.getUnicornsList());
    }, 3000);

    this.store.pipe(select(selectUnicornsList)).subscribe((res => console.log(res)));
  }
}
