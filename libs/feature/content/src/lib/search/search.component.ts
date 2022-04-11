import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";

import { ListCitiesFacade } from "@libs/store";
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'weather-forecast-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  // @ts-ignore
  public searchForm: FormGroup;
  public text = '';
  public results = of([]);
  public list$ = of([]);

  private viewState$ = 'week';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listFacade: ListCitiesFacade,
              private fb: FormBuilder,) {
  }

  public ngOnInit() {
    console.log('Search init');
    // this.listFacade.loadInitialCities();
    this.prepareForm();
    this.list$ = this.listFacade.getCitiesList();
    this.results = this.listFacade.loadInitialCities();
    this.listFacade.getViewState()
      .subscribe((val) => this.viewState$ = val);
  }

  public search(event: {originalEvent: InputEvent, query: string}) {
    console.log(event);
    this.listFacade.findCity(event.query);
  }

  public handleItemSelected($event: any): void {
    console.log($event);
    this.listFacade.addCity({name: $event.name, lon: $event.coord.lon, lat: $event.coord.lat}, this.searchForm.controls['view'].value)
  }

  private prepareForm(): void {
    this.searchForm = this.fb.group({
      cities: [null],
      view: [null]
    });
    this.searchForm.controls['view'].setValue(this.viewState$);
    this.searchForm.controls['view'].valueChanges.subscribe((v) => {
      this.listFacade.setViewState(v);
    })
  }
}
