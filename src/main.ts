import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counterReducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffect } from './app/store/counterEffect';

bootstrapApplication(AppComponent, {
    providers: [provideStore({
        counter: counterReducer,
    }), provideEffects(CounterEffect)]
});
