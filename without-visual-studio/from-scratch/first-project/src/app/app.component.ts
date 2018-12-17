// import of needed elements
import { Component } from "@angular/core";

// declaration of the component tag / class decoration
// selector et template sont obligatoires
@Component({
    selector: "clonewars-app",
    template: "<h1>Hello {{name}}"
})
export class AppComponent {
    name = "Angular";
}