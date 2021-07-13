// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from '@nativescript/angular'
import { firebase } from '@nativescript/firebase';

import { AppModule } from './app/app.module'


firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    () => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
    }
  );
platformNativeScriptDynamic().bootstrapModule(AppModule)
