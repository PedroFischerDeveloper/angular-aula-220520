import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GitComponent } from './git/git.component';
import { CoinComponent } from './coin/coin.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'git', component: GitComponent},
  {path: 'coin', component: CoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
