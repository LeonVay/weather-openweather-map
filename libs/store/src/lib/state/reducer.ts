import { ListActions, ListActionTypes } from "./actions";
import { compose, dissoc, lensPath, set, without } from 'ramda';
import { IListCities } from "../interfaces";


export const initialState: IListCities = {
  loading: false,
  cities: [],
  daily: {},
  dailyColumns: [
    {name: 'City Name'},
    {name: '00:00'},
    {name: '03:00'},
    {name: '06:00'},
    {name: '09:00'},
    {name: '12:00'},
    {name: '15:00'},
    {name: '18:00'},
    {name: '21:00'},
    {name: '24:00'}
  ],
  weekly: {},
  weeklyColumns: [
    {name: 'City Name'},
    {name: 'Monday', viewType: 'week'},
    {name: 'Tuesday', viewType: 'week'},
    {name: 'Wednesday', viewType: 'week'},
    {name: 'Thursday', viewType: 'week'},
    {name: 'Friday', viewType: 'week'},
    {name: 'Saturday', viewType: 'week'},
    {name: 'Sunday', viewType: 'week'},
  ],
  detailedView: '',
  suggestions: [],
  view: 'week',
  tableData: {},
  tableColumns: []
};

export function reducer(state = initialState, action: ListActions): IListCities {
  switch (action.type) {
    case ListActionTypes.LoadContent: {
      return {...state}
    }

    case ListActionTypes.SetViewState: {
      return compose(
        set(lensPath(['view']), action.view)
      )(state)
    }

    case ListActionTypes.SwitchColumns: {
      const newColumns = state.view === 'week' ? [...state.weeklyColumns] : [...state.dailyColumns]

      return compose(
        set(lensPath(['tableColumns']), newColumns)
      )(state)
    }

    case ListActionTypes.SwitchTableData: {
      const newTableData = state.view === 'day' ? {...state.daily} : {...state.weekly};

      return compose(
        set(lensPath(['tableData']), newTableData)
      )(state)
    }

    case ListActionTypes.LoadInitialSuccess: {
      return compose(
        set(lensPath(['cities']), [...action.data])
      )(state)
    }

    case ListActionTypes.AddCity: {
      return compose(
        set(lensPath(['cities']), [...state.cities, action.city])
      )(state)
    }

    case ListActionTypes.RemoveCity: {
      return compose(
        set(lensPath(['cities']), without([action.city], state.cities)),
        set(lensPath(['daily']), dissoc(action.city, state.daily)),
        set(lensPath(['weekly']), dissoc(action.city, state.weekly))
      )(state)
    }

    case ListActionTypes.LoadDayForCitySuccess: {
      return compose(
        set(lensPath(['daily', action.data.name]), action.data)
      )(state)
    }

    case ListActionTypes.LoadWeekForCitySuccess: {
      return compose(
        set(lensPath(['weekly', action.data.name]), action.data)
      )(state)
    }

    case ListActionTypes.RefreshSearch: {
      return compose(
        set(lensPath(['suggestions']), action.suggestions)
      )(state)
    }

    default:
      return state;
  }
}
