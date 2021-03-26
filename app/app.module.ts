import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { IntlModule } from '@progress/kendo-angular-intl';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        ButtonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        TreeListModule,
        TranslateModule.forRoot(),
        IntlModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
