import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { StarWarsApiService } from "./swapi.service";
import { HttpClientModule } from "@angular/common/http";
import { ClientSubsComponent } from './client-subs/client-subs.component';
import { ClientSwitchmapComponent } from './client-switchmap/client-switchmap.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, SearchInputComponent, ClientSubsComponent, ClientSwitchmapComponent],
  bootstrap: [AppComponent],
  providers: [StarWarsApiService]
})
export class AppModule {}
