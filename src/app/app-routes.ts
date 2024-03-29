import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ManageComponent} from "./components/manage/manage.component";


const routes: Routes =[
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

export const AppRoutes= RouterModule.forRoot(routes);
