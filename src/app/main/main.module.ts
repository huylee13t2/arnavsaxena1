import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { MatFormFieldModule } from '@angular/material/form-field';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';
import { CoreModule } from '../core/core.module';

// import { EmployeeModule } from '../employee/employee.module';
// import { OrganisationModule } from '../organisation/organisation.module';
import { DivisionModule } from '../division/division.module';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
} from '@angular/material';

import { MainComponent } from './main.component';
import { DemoComponent } from '../demo/demo.component';
// employee
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeUpdateComponent } from '../employee/update/employee-update.component';
import { EmployeeCreateComponent } from '../employee/create/employee-create.component';
import { EmployeeRemoveComponent } from '../employee/remove/employee-remove.component';
// organisation
import { OrganisationComponent } from '../organisation/organisation.component';
import { OrganisationUpdateComponent } from '../organisation/update/organisation-update.component';
import { DivisionComponent } from '../division/division.component';
import { HierarchyComponent } from '../hierarchy/hierarchy.component';

const appRoutes: Routes = [
{ 
    path: '',
    component: MainComponent,
    children: [
    { path: 'test', component: DemoComponent },
    { path: 'hierarchy', component: HierarchyComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'organisation', component: OrganisationComponent },
    { path: 'division', component: DivisionComponent },
    ]
},
]

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        DashboardCrmModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule,
        // add module
        // EmployeeModule,
        // OrganisationModule,
        DivisionModule,
        // materail
        CdkTableModule,
        CdkTreeModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
    ],
    exports: [
        CdkTableModule,
        CdkTreeModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
    ],
    declarations: [
        MainComponent,
        DemoComponent,
        // employee
        EmployeeComponent,
        EmployeeUpdateComponent,
        EmployeeCreateComponent,
        EmployeeRemoveComponent,
        // 
        HierarchyComponent,
        // Organisation
        OrganisationComponent,
        OrganisationUpdateComponent,
    ],
    entryComponents: [
        EmployeeComponent, 
        EmployeeUpdateComponent, 
        EmployeeCreateComponent,
        EmployeeRemoveComponent,
        // Organisation
        OrganisationComponent,
        OrganisationUpdateComponent,
    ],
})
export class MainModule { }
