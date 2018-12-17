import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // browser module car module Racine

import {AppComponent} from "./app.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent] // module racine au démarrage
})
export class AppModule {

}