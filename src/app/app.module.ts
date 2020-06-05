import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { BadgeComponent } from './badge/badge.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TypographyComponent } from './typography/typography.component';
import { ToolComponent } from './tool/tool.component';


@NgModule({
  declarations: [
    AppComponent,
    SvgIconComponent,
    BadgeComponent,
    MenuComponent,
    NavbarComponent,
    ButtonToggleComponent,
    ProgressSpinnerComponent,
    SidebarComponent,
    ToolbarComponent,
    TypographyComponent,
    ToolComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
