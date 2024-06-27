import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { RxjsTutorialComponent } from './rxjs-tutorial/rxjs-tutorial.component';

export const routes: Routes = [
  {
    path: '',
    component: RxjsTutorialComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
];
