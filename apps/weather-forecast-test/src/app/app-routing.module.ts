import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@libs/guards";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('@libs/auth').then((m) => m.FeatureAuthModule)
    },
    {
        path: 'content',
        loadChildren: () => import('@libs/content').then((m) => m.FeatureContentModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        paramsInheritanceStrategy: 'always'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
