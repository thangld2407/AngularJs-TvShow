import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
// import { StarComponent } from "./components/star.component";
import { RouterModule } from "@angular/router";
import { CastComponent } from "./components/Cast/Cast.component";
import { WellcomeComponent } from "./components/Welcome/Wellcome.component";
@NgModule({
  declarations: [
    AppComponent,
    CastComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([
      {path: 'cast/:showId', component: CastComponent},
      {path: 'welcome', component: WellcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
