import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'welcome', component: WelcomeComponent
      },
      {
        path: 'contacts',
        data: { preload: false },
        loadChildren: 'app/contact/contact.module#ContactModule'
      },
      {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ],
    { enableTracing: true, preloadingStrategy: SelectiveStrategy }
  )],
  providers: [SelectiveStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
