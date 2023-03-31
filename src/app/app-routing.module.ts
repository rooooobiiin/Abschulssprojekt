import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./components/overview/overview.component";
import {TestComponent} from "./components/test/test.component";
import {FreestyleCreateComponent} from "./components/freestyle-create/freestyle-create.component";

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'overview', component: OverviewComponent},
  {path:'createfreestyle', component: FreestyleCreateComponent},
  {path: 'test', component: TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
