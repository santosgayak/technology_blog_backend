import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import the HttpClient provider
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),       // Provide the router with defined routes
    provideHttpClient(),         // Provide HttpClient for making HTTP requests
    ...appConfig.providers       // Spread additional providers from your app config
  ],
}).catch((err) => console.error(err));
