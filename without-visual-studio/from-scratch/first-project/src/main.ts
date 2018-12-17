import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

// indique que fait pour navigateur, pas pour cross platform par exemple.
platformBrowserDynamic().bootstrapModule(AppModule);