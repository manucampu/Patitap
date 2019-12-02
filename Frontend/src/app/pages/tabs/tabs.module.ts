import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {
    path: '',
    component: TabsPage,
    //Definir las rutas hijas
    children : [
      { path: 'principal', loadChildren: '../principal/principal.module#PrincipalPageModule' },
      { path: 'login-registro', loadChildren: '../login-registro/login-registro.module#LoginRegistroPageModule' }
     
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
