import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonsComponent} from './buttons/buttons.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BadgeComponent } from './badge/badge.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent},
  { path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'svg-icon', component: SvgIconComponent},
  {path: 'badge', component:BadgeComponent},
  {path: 'menu' , component:MenuComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'progress-spinner',component:ProgressSpinnerComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path:'toolbar', component:ToolbarComponent},
  {path:'typography',component:TypographyComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
