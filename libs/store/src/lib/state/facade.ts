import { Injectable } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IFeatureListCitiesState } from "../interfaces";
import { select, Store } from "@ngrx/store";
import {
  AddCity,
  FindCoordinates,
  LoadContent,
  LoadDayForCity,
  LoadInitialCities,
  LoadWeekForCity,
  RemoveCity, SetViewState
} from "./actions";
import { getCities, getCurrentColumns, getCurrentTableData, getSuggestionsList, getViewState } from "./selectors";

@Injectable()
export class ListCitiesFacade {

  readonly ngUnsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<IFeatureListCitiesState>) {
  }

  loadContent(): void {
    this.store.dispatch(new LoadContent());
  }

  addCity(city: any, view: string): void {
    this.store.dispatch(new AddCity(city, view));
  }

  removeCity(city: string): void {
    this.store.dispatch(new RemoveCity(city));
  }

  loadDailyForCity(city: string): void {
    this.store.dispatch(new LoadDayForCity(city));
  }

  loadWeeklyForCity(city: string): void {
    this.store.dispatch(new LoadWeekForCity(city));
  }

  findCity(name: string): void {
    this.store.dispatch(new FindCoordinates(name));
  }

  loadInitialCities(): Observable<any> {
    return this.store.pipe(
      select(getSuggestionsList),
      takeUntil(this.ngUnsubscribe$)
    )
  }

  getCitiesList(): Observable<any> {
    return this.store.pipe(
      select(getCities),
      takeUntil(this.ngUnsubscribe$)
    )
  }

  getViewState(): Observable<string> {
    return this.store.pipe(
      select(getViewState),
      takeUntil(this.ngUnsubscribe$)
    )
  }

  setViewState(view: string): void {
    this.store.dispatch(new SetViewState(view))
  }

  getCurrentColumns(): Observable<any> {
    return this.store.pipe(
      select(getCurrentColumns),
      takeUntil(this.ngUnsubscribe$)
    )
  }

  getTableData(): Observable<any> {
    return this.store.pipe(
      select(getCurrentTableData),
      takeUntil(this.ngUnsubscribe$)
    )
  }

  unsubscribe(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
