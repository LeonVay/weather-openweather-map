import { Action } from "@ngrx/store";

export enum ListActionTypes {
  LoadContent = '[List] Load content',
  AddCity = '[List] Add city to list',
  RemoveCity = '[List] Remove city from list',
  LoadDayForCity = '[List] Load city hourly info ',
  LoadDayForCitySuccess = '[List] Load city hourly info success',
  LoadWeekForCity = '[List] Load city week info',
  LoadWeekForCitySuccess = '[List] Load city week info success',
  FindCoordinates = '[List] Find city coordinates',
  LoadInitial = '[List] Load cities list',
  LoadInitialSuccess = '[List] Load cities success',
  RefreshSearch = '[Search] Refresh search suggestions',
  SetViewState = '[Search] Set new view state',
  SwitchColumns = '[List] Switch columns',
  SwitchTableData = '[List] Switch table data'
}

export class LoadContent implements Action {
  readonly type = ListActionTypes.LoadContent
}

export class AddCity implements Action {
  readonly type = ListActionTypes.AddCity;

  constructor(public city: any, public view: string) {
  }
}

export class RemoveCity implements Action {
  readonly type = ListActionTypes.RemoveCity;

  constructor(public city: string) {
  }
}

export class LoadDayForCity implements Action {
  readonly type = ListActionTypes.LoadDayForCity;

  constructor(public city: string) {
  }
}

export class LoadDayForCitySuccess implements Action {
  readonly type = ListActionTypes.LoadDayForCitySuccess;

  constructor(public data: any) {
  }
}

export class LoadWeekForCity implements Action {
  readonly type = ListActionTypes.LoadWeekForCity;

  constructor(public city: string) {
  }
}

export class LoadWeekForCitySuccess implements Action {
  readonly type = ListActionTypes.LoadWeekForCitySuccess;

  constructor(public data: any) {
  }
}

export class FindCoordinates implements Action {
  readonly type = ListActionTypes.FindCoordinates;

  constructor(public name: string) {
  }
}

export class LoadInitialCities implements Action {
  readonly type = ListActionTypes.LoadInitial;
}

export class LoadInitialCitiesSuccess implements Action {
  readonly type = ListActionTypes.LoadInitialSuccess;

  constructor(public data: any[]) {
  }
}

export class RefreshSearchList implements Action {
  readonly type = ListActionTypes.RefreshSearch;

  constructor(public suggestions: any[]) {
  }
}

export class SetViewState implements Action {
  readonly type = ListActionTypes.SetViewState

  constructor(public view: string) {
  }
}

export class SwitchColumns implements Action {
  readonly type = ListActionTypes.SwitchColumns;
}

export class SwitchTableData implements Action {
  readonly type = ListActionTypes.SwitchTableData
}

export type ListActions = LoadContent
  | AddCity
  | RemoveCity
  | LoadDayForCity
  | LoadWeekForCity
  | LoadDayForCitySuccess
  | LoadWeekForCitySuccess
  | LoadInitialCities
  | LoadInitialCitiesSuccess
  | RefreshSearchList
  | SetViewState
  | SwitchColumns
  | SwitchTableData;
