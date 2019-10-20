import { Component, OnInit } from '@angular/core';
import { UnicornsActions } from './store/actions/unicorns.actions';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log('init app');
    setTimeout(() =>{
      this.store.dispatch(UnicornsActions.getUnicornsList());
      console.log('dispatched');
    }, 3000);
  }
}
