import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction } from '../store/counterAction';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private counterService: CounterService,private store:Store) {}

  increment() {
    this.store.dispatch(incrementAction({value:2}))
    // this.counterService.increment();
  }

  decrement() {
    this.store.dispatch(decrementAction({value:1}))
    // this.counterService.decrement();
  }
}
