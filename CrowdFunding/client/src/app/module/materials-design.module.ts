import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot(),
        FormsModule
    ],
    exports: [
        MDBBootstrapModule,
        FormsModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MaterialsDesignModule { }