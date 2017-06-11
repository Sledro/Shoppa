import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
import { AuthPage } from '../pages/auth/home/home';
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { LocationPage } from '../pages/location/location';
import { AngularFireModule } from 'angularfire2';
import { AutocompletePage } from '../pages/location/autocomplete';

// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDPjUsCzrYkmu5KNoDp9pvaW8zoPS9gfYk",
    authDomain: "shoppa-157915.firebaseapp.com",
    databaseURL: "https://shoppa-157915.firebaseio.com",
    storageBucket: "shoppa-157915.appspot.com",
};

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    TermsOfServicePage,
    LocationPage,
    AutocompletePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    TermsOfServicePage,
    LocationPage,
    AutocompletePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider]
})
export class AppModule {}
