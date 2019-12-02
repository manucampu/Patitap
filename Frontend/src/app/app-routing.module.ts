import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'login-registro', loadChildren: './pages/login-registro/login-registro.module#LoginRegistroPageModule' },
  { path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'add-perdido', loadChildren: './pages/add-perdido/add-perdido.module#AddPerdidoPageModule' },
  { path: 'perdidos', loadChildren: './pages/perdidos/perdidos.module#PerdidosPageModule' },
  { path: 'encontrados', loadChildren: './pages/encontrados/encontrados.module#EncontradosPageModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
