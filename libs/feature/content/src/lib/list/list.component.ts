import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ListCitiesFacade } from "@libs/store";
import { WeatherService } from "@libs/api-services";
import { Observable } from "rxjs";


@Component({
  selector: 'weather-forecast-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  public cities$: Observable<any> = new Observable<any>();
  private selectedViewType$ = 'week'; // TODO: state observable;

  public columns$: Observable<any> = new Observable<any>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private facade: ListCitiesFacade,
              private service: WeatherService
  ) {}

  ngOnInit() {
    console.log('List loaded');
    this.route.paramMap
      .subscribe((params) => {
        if (params.get('city')) {
          this.loadCityDetails(params.get('city') || '');
        }
      });
    this.cities$ = this.facade.getTableData();
    this.columns$ = this.facade.getCurrentColumns();
  }

  public handleRowRemove(city: string): void {
    console.log('Remove city');
    // TODO: call state remove city;
    this.facade.removeCity(city);
  }

  private loadCityDetails(city: string): void {
    console.log('City load', city);
    if (city !== '') {
      // this.facade.addCity(city);
    }
  }
}
