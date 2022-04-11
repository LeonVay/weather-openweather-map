import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { FeatureAuthRoutingModule } from "./feature-auth-routing.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, FeatureAuthRoutingModule, TranslateModule.forRoot()],
})
export class FeatureAuthModule {}
