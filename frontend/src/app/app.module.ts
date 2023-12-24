import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './shared/header/header.component';
import { SchoolsModule } from './components/schools/schools.module';
import { EmployeesModule } from './components/employees/employees.module';
import { StudentsModule } from './components/students/students.module';
import { UserModule } from './components/users/users.module';
import { TokenInterceptorInterceptor } from './core/token-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SchoolsModule,
    EmployeesModule,
    StudentsModule,
    UserModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
