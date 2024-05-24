import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withDebugTracing, withRouterConfig } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { ApplicationRef } from '@angular/core';

export default async function(): Promise<ApplicationRef> {
  try {
    const appRef = await bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(appRoutes,
          withDebugTracing(),
          withRouterConfig({ paramsInheritanceStrategy: 'always' })
        )
      ]
    });
    return appRef;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
