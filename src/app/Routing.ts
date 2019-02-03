import {ModuleWithProviders, Component} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ListEmployeeComponent } from './emloyees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './emloyees/create-employee/create-employee.component';

const route : Routes = [
    {path:'', redirectTo:'list',pathMatch:'full'},
    {path:'create', component: CreateEmployeeComponent },
    {path:'list', component: ListEmployeeComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(route);