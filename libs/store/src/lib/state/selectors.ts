import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IListCities } from "../interfaces";

export const selectCitiesList = createFeatureSelector<IListCities>('cities');

export const isLoading = createSelector(
  selectCitiesList,
  (state: IListCities) => state.loading
);

export const getCities = createSelector(
  selectCitiesList,
  (state: IListCities) => state.cities
);

export const getDailyTable = createSelector(
  selectCitiesList,
  (state: IListCities) => state.daily
);

export const getDailyForCity = createSelector(
  selectCitiesList,
  (state: IListCities) => state.daily[state.detailedView]
)

export const getWeeklyTable = createSelector(
  selectCitiesList,
  (state: IListCities) => state.weekly
)

export const getWeeklyForCity = createSelector(
  selectCitiesList,
  (state: IListCities) => state.weekly[state.detailedView]
)

export const getSuggestionsList = createSelector(
  selectCitiesList,
  (state: IListCities) => state.suggestions
)

export const getViewState = createSelector(
  selectCitiesList,
  (state: IListCities) => state.view
)

export const getCurrentColumns = createSelector(
  selectCitiesList,
  (state: IListCities) => state.tableColumns
)

export const getCurrentTableData = createSelector(
  selectCitiesList,
  (state: IListCities) => state.tableData
)
