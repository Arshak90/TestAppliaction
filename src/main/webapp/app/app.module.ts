import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestAppliactionSharedModule } from 'app/shared/shared.module';
import { TestAppliactionCoreModule } from 'app/core/core.module';
import { TestAppliactionAppRoutingModule } from './app-routing.module';
import { TestAppliactionHomeModule } from './home/home.module';
import { TestAppliactionEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestAppliactionSharedModule,
    TestAppliactionCoreModule,
    TestAppliactionHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestAppliactionEntityModule,
    TestAppliactionAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class TestAppliactionAppModule {}
