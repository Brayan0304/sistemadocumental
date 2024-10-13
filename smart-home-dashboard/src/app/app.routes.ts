import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'addsalary', component: AddsalaryComponent },
    { path: 'addstaff', component: AddstaffComponent },
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'reports', component: ReportsComponent }
];
