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
import { ActivityAddComponent } from './dashboard/admin-activity/activity-add/activity-add.component';
import { ActivityEditComponent } from './dashboard/admin-activity/activity-edit/activity-edit.component';
import { AnimateurAddComponent } from './dashboard/admin-animateur/animateur-add/animateur-add.component';
import { AnimateurEditComponent } from './dashboard/admin-animateur/animateur-edit/animateur-edit.component';
import { ContactAddComponent } from './dashboard/admin-contact/contact-add/contact-add.component';
import { ContactEditComponent } from './dashboard/admin-contact/contact-edit/contact-edit.component';
import { PartenaireAddComponent } from './dashboard/admin-partenaire/partenaire-add/partenaire-add.component';
import { PartenaireEditComponent } from './dashboard/admin-partenaire/partenaire-edit/partenaire-edit.component';
import { SoutenirEditComponent } from './dashboard/admin-soutenir/soutenir-edit/soutenir-edit.component';
import { SoutenirAddComponent } from './dashboard/admin-soutenir/soutenir-add/soutenir-add.component';
import { TestimonialAddComponent } from './dashboard/admin-testimonial/testimonial-add/testimonial-add.component';
import { TestimonialEditComponent } from './dashboard/admin-testimonial/testimonial-edit/testimonial-edit.component';
import { UserAddComponent } from './dashboard/admin-user/user-add/user-add.component';
import { UserEditComponent } from './dashboard/admin-user/user-edit/user-edit.component';
import { NewsletterAddComponent } from './dashboard/admin-newsletter/newsletter-add/newsletter-add.component';
import { NewsletterEditComponent } from './dashboard/admin-newsletter/newsletter-edit/newsletter-edit.component';

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
      { path: 'activity-add', component: ActivityAddComponent },
      { path: ':id/activity-edit', component: ActivityEditComponent }, 

      { path: 'admin-animateur', component: AdminAnimateurComponent },
      { path: 'animateur-add', component: AnimateurAddComponent },
      { path: ':id/animateur-edit', component: AnimateurEditComponent }, 

      { path: 'admin-contact', component: AdminContactComponent },
      { path: 'contact-add', component: ContactAddComponent },
      { path: ':id/contact-edit', component: ContactEditComponent }, 

      { path: 'admin-events', component: AdminEventsComponent }, 
      { path: 'events-add', component: EventAddComponent },
      { path: ':id/events-edit', component: EventEditComponent },

      { path: 'admin-partners', component: AdminPartenaireComponent },
      { path: 'partner-add', component: PartenaireAddComponent },
      { path: ':id/partner-edit', component: PartenaireEditComponent }, 

      { path: 'admin-soutenir', component: AdminSoutenirComponent },
      { path: 'soutenir-add', component: SoutenirAddComponent },
      { path: ':id/soutenir-edit', component: SoutenirEditComponent }, 

      { path: 'admin-testimonials', component: AdminTestimonialComponent },
      { path: 'testimonials-add', component: TestimonialAddComponent },
      { path: ':id/testimonials-edit', component: TestimonialEditComponent }, 

      { path: 'admin-users', component: AdminUserComponent },
      { path: 'user-add', component: UserAddComponent },
      { path: ':id/user-edit', component: UserEditComponent }, 

      { path: 'admin-newsletter', component: AdminNewsletterComponent },
      { path: 'newsletter-add', component: NewsletterAddComponent },
      { path: ':id/newsletter-edit', component: NewsletterEditComponent },


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
