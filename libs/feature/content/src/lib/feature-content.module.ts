import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { TableModule } from "primeng/table";
import { DetailsComponent } from "./details/details.component";
import { FeatureContentRoutingModule } from "./feature-content-routing.module";
import { ListComponent } from "./list/list.component";
import { SearchComponent } from "./search/search.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreListModule } from "@libs/store";
import { RadioButtonModule } from "primeng/radiobutton";


@NgModule({
  declarations: [
    DetailsComponent,
    HeaderComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    AutoCompleteModule,
    FeatureContentRoutingModule,
    StoreListModule
  ],
})
export class FeatureContentModule {}
