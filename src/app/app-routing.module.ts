import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { EventsDetailsPageComponent } from './pages/events-details-page/events-details-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { ActivityDetailsPageComponent } from './pages/activity-details-page/activity-details-page.component';
import { SoutenirPageComponent } from './pages/soutenir-page/soutenir-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './common/not-found/not-found.component'; 
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TeamDetailPageComponent } from './pages/team-detail-page/team-detail-page.component'; 
import { AdminActivityComponent } from './dashboard/admin-activity/admin-activity.component';
import { AdminAnimateurComponent } from './dashboard/admin-animateur/admin-animateur.component';
import { AdminContactComponent } from './dashboard/admin-contact/admin-contact.component';
import { AdminEventsComponent } from './dashboard/admin-events/admin-events.component';
import { AdminPartenaireComponent } from './dashboard/admin-partenaire/admin-partenaire.component';
import { AdminSoutenirComponent } from './dashboard/admin-soutenir/admin-soutenir.component';
import { AdminTestimonialComponent } from './dashboard/admin-testimonial/admin-testimonial.component';
import { AdminUserComponent } from './dashboard/admin-user/admin-user.component';
import { AdminNewsletterComponent } from './dashboard/admin-newsletter/admin-newsletter.component';
import { EventEditComponent } from './dashboard/admin-events/event-edit/event-edit.component';
import { EventAddComponent } from './dashboard/admin-events/event-add/event-add.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { authGuard } from './guard/auth.guard';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'events-detail/:id/:title', component: EventsDetailsPageComponent },
  { path: 'activity', component: ActivityPageComponent },
  { path: 'activity/:title', component: ActivityDetailsPageComponent },
  { path: 'soutenir', component: SoutenirPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'team/:id', component: TeamDetailPageComponent},

  { path: 'not-found', component: NotFoundComponent },

  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'admin', component: DashboardComponent, children: [
      { path: 'admin-activity', component: AdminActivityComponent },
      { path: 'admin-animateur', component: AdminAnimateurComponent },
      { path: 'admin-contact', component: AdminContactComponent },
      { path: 'admin-events', component: AdminEventsComponent }, 
      { path: 'events-add', component: EventAddComponent },
      { path: ':id/events-edit', component: EventEditComponent },
      { path: 'admin-partners', component: AdminPartenaireComponent },
      { path: 'admin-soutenir', component: AdminSoutenirComponent },
      { path: 'admin-testimonials', component: AdminTestimonialComponent },
      { path: 'admin-users', component: AdminUserComponent },
      { path: 'admin-newsletter', component: AdminNewsletterComponent },
    ],
    // canActivate: [authGuard]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
