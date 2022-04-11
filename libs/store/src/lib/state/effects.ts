import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ListCitiesFacade } from "./facade";
import { WeatherService } from "@libs/api-services";
import {
  AddCity,
  FindCoordinates,
  ListActionTypes,
  LoadDayForCity,
  LoadDayForCitySuccess, LoadInitialCitiesSuccess,
  LoadWeekForCity, LoadWeekForCitySuccess, RefreshSearchList, SwitchColumns, SwitchTableData
} from "./actions";
import { map, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { IListCities } from "../interfaces";
import { getViewState } from "./selectors";


@Injectable()
export class ListEffects {


  loadCoordinates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListActionTypes.FindCoordinates),
      switchMap((action: FindCoordinates) => this.weatherService.getListOfCities(action.name)),
      map((res) => new RefreshSearchList(res.list))
    )
  })

  addCityToList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListActionTypes.AddCity),
      // @ts-ignore
      switchMap((action: AddCity) => {
        if (action.view === 'week') {
          return this.weatherService.getWeekInfo(action.city);
        }
        if (action.view === 'day') {
          return this.weatherService.getDayInfo(action.city);
        }
      }),
      map((res) => {
        console.log(res);
        return new LoadWeekForCitySuccess(res);
      })
    )
  })


  loadDailyForCity = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListActionTypes.LoadDayForCity),
      switchMap((action: LoadDayForCity) => this.weatherService.getDayInfo(action.city)),
      map((res) => new LoadDayForCitySuccess(res))
    )
  })


  loadWeeklyForCity = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListActionTypes.LoadWeekForCity),
      switchMap((action: LoadWeekForCity) => this.weatherService.getWeekInfo(action.city)),
      map((res) => new LoadWeekForCitySuccess(res))
    )
  })


  loadInitialCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListActionTypes.LoadInitial),
      switchMap(() => this.weatherService.getListOfCities('')),
      map((res) => new LoadInitialCitiesSuccess(res.list))
    )
  })

  updateViewState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListActionTypes.SetViewState),
      tap(() => new SwitchColumns()),
      map(() => new SwitchTableData())
    )
  })


  constructor(
    private actions$: Actions,
    private store$: Store<IListCities>,
    private listFacade: ListCitiesFacade,
    private weatherService: WeatherService
  ) {
  }
}
