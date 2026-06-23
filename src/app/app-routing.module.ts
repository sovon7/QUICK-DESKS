import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'jokes',
    loadChildren: () => import('./features/jokes-funny/jokes-funny.module').then(m => m.JokesFunnyModule)
  },
  {
    path: 'notepad',
    loadChildren: () => import('./features/notepad-note/notepad-note.module').then(m => m.NotepadNoteModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./features/fun-game/fun-game.module').then(m => m.FunGameModule)
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
