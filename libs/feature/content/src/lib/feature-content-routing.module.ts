import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { DetailsComponent } from "./details/details.component";
import { ListComponent } from "./list/list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'details/:city',
        component: DetailsComponent,
        data: {
          params: 'city'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureContentRoutingModule {}
