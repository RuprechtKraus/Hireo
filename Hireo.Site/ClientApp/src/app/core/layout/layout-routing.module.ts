import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/features/home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../features/home/home.module').then((m) => m.HomeModule),
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: '',
        loadChildren: () =>
          import('../../features/authorization/authorization.module').then(
            (m) => m.AuthorizationModule
          ),
      },
    ],
  },
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () =>
          import('../../features/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
