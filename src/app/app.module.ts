import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './common/top-header/top-header.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './pages/events-details-page/events-details-page.component';
import { ActivityDetailsPageComponent } from './pages/activity-details-page/activity-details-page.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';  
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeBannerComponent } from './pages/home-page/home-banner/home-banner.component';
import { SoutenirPageComponent } from './pages/soutenir-page/soutenir-page.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HomeValeursComponent } from './pages/home-page/home-valeurs/home-valeurs.component';
import { HomeObjectifsComponent } from './pages/home-page/home-objectifs/home-objectifs.component';
import { HomeEventsComponent } from './pages/home-page/home-events/home-events.component';
import { HomeFeaturesComponent } from './pages/home-page/home-features/home-features.component';
import { HomeProvinceComponent } from './pages/home-page/home-province/home-province.component';
import { HomeStatsComponent } from './pages/home-page/home-stats/home-stats.component';
import { HomeFeedBackComponent } from './pages/home-page/home-feed-back/home-feed-back.component';
import { HomePartenersComponent } from './pages/home-page/home-parteners/home-parteners.component';
import { HomeActivityComponent } from './pages/home-page/home-activity/home-activity.component';
import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { HistoriqueComponent } from './pages/about-page/historique/historique.component'; 
import { ActivityService } from './services/activity.service';
import { AnimateurService } from './services/animateur.service';
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';
import { EventsService } from './services/events.service';
import { ImageStorageService } from './services/image-storage.service';
import { MailService } from './services/mail.service';
import { NewsletterService } from './services/newsletter.service';
import { PartnerService } from './services/partner.service';
import { SoutenirService } from './services/soutenir.service';
import { TestimonialService } from './services/testimonial.service';
import { UserService } from './services/user.service';
import { SharedModule } from './shared/shared.module';
import { AdminUserComponent } from './dashboard/admin-user/admin-user.component';
import { AdminContactComponent } from './dashboard/admin-contact/admin-contact.component';
import { AdminEventsComponent } from './dashboard/admin-events/admin-events.component';
import { AdminActivityComponent } from './dashboard/admin-activity/admin-activity.component';
import { AdminAnimateurComponent } from './dashboard/admin-animateur/admin-animateur.component';
import { AdminPartenaireComponent } from './dashboard/admin-partenaire/admin-partenaire.component';
import { AdminSoutenirComponent } from './dashboard/admin-soutenir/admin-soutenir.component';
import { AdminTestimonialComponent } from './dashboard/admin-testimonial/admin-testimonial.component';
import { AdminNewsletterComponent } from './dashboard/admin-newsletter/admin-newsletter.component';
import { EventEditComponent } from './dashboard/admin-events/event-edit/event-edit.component';
import { EventAddComponent } from './dashboard/admin-events/event-add/event-add.component';
import { NewsletterAddComponent } from './dashboard/admin-newsletter/newsletter-add/newsletter-add.component';
import { NewsletterEditComponent } from './dashboard/admin-newsletter/newsletter-edit/newsletter-edit.component';
import { TestimonialAddComponent } from './dashboard/admin-testimonial/testimonial-add/testimonial-add.component';
import { TestimonialEditComponent } from './dashboard/admin-testimonial/testimonial-edit/testimonial-edit.component';
import { SoutenirAddComponent } from './dashboard/admin-soutenir/soutenir-add/soutenir-add.component';
import { SoutenirEditComponent } from './dashboard/admin-soutenir/soutenir-edit/soutenir-edit.component';
import { ActivityAddComponent } from './dashboard/admin-activity/activity-add/activity-add.component';
import { ActivityEditComponent } from './dashboard/admin-activity/activity-edit/activity-edit.component';
import { PartenaireAddComponent } from './dashboard/admin-partenaire/partenaire-add/partenaire-add.component';
import { PartenaireEditComponent } from './dashboard/admin-partenaire/partenaire-edit/partenaire-edit.component';
import { UserAddComponent } from './dashboard/admin-user/user-add/user-add.component';
import { UserEditComponent } from './dashboard/admin-user/user-edit/user-edit.component';
import { ContactAddComponent } from './dashboard/admin-contact/contact-add/contact-add.component';
import { ContactEditComponent } from './dashboard/admin-contact/contact-edit/contact-edit.component';
import { AnimateurAddComponent } from './dashboard/admin-animateur/animateur-add/animateur-add.component';
import { AnimateurEditComponent } from './dashboard/admin-animateur/animateur-edit/animateur-edit.component'; 
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { DatePipe } from '@angular/common';
import { ActivityWidgetComponent } from './pages/activity-details-page/activity-widget/activity-widget.component'; 
import { AnimateurPageComponent } from './pages/animateur-page/animateur-page.component';
import { AnimateurDetailPageComponent } from './pages/animateur-detail-page/animateur-detail-page.component';



@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavbarComponent,
    FooterComponent,
    AboutPageComponent,
    ContactPageComponent,
    EventsPageComponent,
    EventsDetailsPageComponent,
    ActivityDetailsPageComponent,
    ActivityPageComponent,
    HomePageComponent,  
    LoginPageComponent,
    RegisterPageComponent,
    DashboardComponent,
    HomeBannerComponent,
    SoutenirPageComponent,
    NotFoundComponent,
    HomeValeursComponent,
    HomeObjectifsComponent,
    HomeEventsComponent,
    HomeFeaturesComponent,
    HomeProvinceComponent,
    HomeStatsComponent,
    HomeFeedBackComponent,
    HomePartenersComponent,
    HomeActivityComponent,
    SubscribeComponent,
    HistoriqueComponent,
    AdminUserComponent,
    AdminContactComponent,
    AdminEventsComponent,
    AdminActivityComponent,
    AdminAnimateurComponent,
    AdminPartenaireComponent,
    AdminSoutenirComponent,
    AdminTestimonialComponent,
    AdminNewsletterComponent,
    EventEditComponent,
    EventAddComponent,
    NewsletterAddComponent,
    NewsletterEditComponent,
    TestimonialAddComponent,
    TestimonialEditComponent,
    SoutenirAddComponent,
    SoutenirEditComponent,
    ActivityAddComponent,
    ActivityEditComponent,
    PartenaireAddComponent,
    PartenaireEditComponent,
    UserAddComponent,
    UserEditComponent,
    ContactAddComponent,
    ContactEditComponent,
    AnimateurAddComponent,
    AnimateurEditComponent, 
    ResetPasswordComponent,
    ForgotPasswordComponent,
    ActivityWidgetComponent, 
    AnimateurPageComponent, AnimateurDetailPageComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxScrollTopModule,

    SharedModule,
    CKEditorModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    DatePipe,
    ActivityService,
    AnimateurService,
    AuthService,
    ContactService,
    EventsService,
    ImageStorageService,
    MailService,
    NewsletterService,
    PartnerService,
    SoutenirService,
    TestimonialService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
