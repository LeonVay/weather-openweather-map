import { ActionReducerMap, MetaReducer } from "@ngrx/store";

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {};
export const metaReducers: MetaReducer<RootState>[] = [];

export interface IListCities {
  loading: boolean;
  cities: any;
  daily: {[key: string]: IDailyView};
  dailyColumns: any[];
  weekly: {[key: string]: any};
  weeklyColumns: any[];
  detailedView: string;
  suggestions: any[];
  view: string;
  tableData: {[key: string]: any}; // TODO: update interface
  tableColumns: {[key: string]: any}[]; // TODO: update interface
}

export interface IFeatureListCitiesState extends RootState {
  cities: IListCities
}

export interface IDailyView {
  name: string;
  data: any;
  selected: boolean;
}
