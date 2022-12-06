import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesPageModule),
  },{
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesPageModule),
  },
  {
    path: 'movies/:id',
    loadChildren: () =>
      import('./pages/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsPageModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
