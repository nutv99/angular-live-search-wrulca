import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { StarWarsApiService, StarWarsResult } from "../swapi.service";

@Component({
  selector: "app-client-subs",
  templateUrl: "./client-subs.component.html",
  styleUrls: ["./client-subs.component.css"]
})
export class ClientSubsComponent {
  results: StarWarsResult | null = null;

  searchRequestSubscriptions: Subscription[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  onTextChange(changedText: string) {
    this.cancelPendingRequests();
    const starWarsSubscription = this.starWarsApiService
      .getResults(changedText)
      .subscribe(
        response => {
          this.results = response;
        },
        errorResponse => {
          alert("oh no, there was an error when calling the star wars api");
          console.error(errorResponse);
        }
      );
    this.searchRequestSubscriptions.push(starWarsSubscription);
  }

  cancelPendingRequests() {
    this.searchRequestSubscriptions.forEach(sub => sub.unsubscribe());
  }
}
