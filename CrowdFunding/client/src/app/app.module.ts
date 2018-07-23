import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialsDesignModule } from 'src/app/module/materials-design.module';
import { HomeComponent } from './page/home/home.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { LoginFormComponent } from './page/login-form/login-form.component';
import { RegisterFormComponent } from './page/register-form/register-form.component';
import { AuthenticationService } from 'src/app/service/security-service/authentication-service';
import { CanActivateAuthGuard } from './service/security-service/can-activate-auth.guard';
import { JwtUtilsService } from './service/security-service/jwt-utils.service';
import { TokenInterceptorService } from './service/security-service/token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProjectService } from './service/project-service';
import { AddProjectComponent } from './page/add-project/add-project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ProjectDetailsCardComponent } from './page/project-details-card/project-details-card.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProjectsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectDetailsCardComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    ),
    BrowserModule,
    MaterialsDesignModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
