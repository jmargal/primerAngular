import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModule } from './alumnos/alumnos.module';

import { AppComponent } from './app.component';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';
import { ContadorComponent } from './contador/contador.component';
import { Lista } from './lista/lista.component';

@NgModule({
  declarations: [AppComponent, ContadorComponent, Lista],
  imports: [BrowserModule, AlumnosModule,BrawlStarsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
