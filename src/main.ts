import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withDebugTracing, withRouterConfig } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes,
      withDebugTracing(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    )
  ]
}).catch(err => console.error(err));
