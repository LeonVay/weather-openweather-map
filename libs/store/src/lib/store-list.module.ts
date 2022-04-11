import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/reducer";
import { ListEffects } from "./state/effects";
import { ListCitiesFacade } from "./state/facade";


@NgModule({
  imports: [
    StoreModule.forFeature('cities', reducer),
    EffectsModule.forRoot([ListEffects])
  ],
  providers: [ListCitiesFacade]
})
export class StoreListModule {}
