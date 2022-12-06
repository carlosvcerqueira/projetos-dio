import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaModule } from "./lista/lista.module";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ListaModule,
    ]
})
export class AppModule { }
