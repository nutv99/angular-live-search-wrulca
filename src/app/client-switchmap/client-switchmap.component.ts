import { Component } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { StarWarsApiService, StarWarsResult } from "../swapi.service";

@Component({
  selector: "app-client-switchmap",
  templateUrl: "./client-switchmap.component.html",
  styleUrls: ["./client-switchmap.component.css"]
})
export class ClientSwitchmapComponent {
  searchTerm = new Subject<string>();
  results$: Observable<StarWarsResult> = this.searchTerm.pipe(
    switchMap(searchTerm => this.starWarsApiService.getResults(searchTerm)),
    catchError(errorResponse => {
      alert("oh no, there was an error when calling the star wars api");
      console.error(errorResponse);
      return of(null);
    })
  );

  constructor(private starWarsApiService: StarWarsApiService) {}

  onTextChange(changedText: string) {
    this.searchTerm.next(changedText);
  }
}
