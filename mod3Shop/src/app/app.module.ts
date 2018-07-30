import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { RecipieComponent } from './recipie/recipie.component';
import { RecipieListComponent } from './recipie/recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './recipie/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipie/recipie-list/recipie-item/recipie-item.component';
import { ShopingEditComponent } from './shoplist/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoplistComponent,
    RecipieComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    ShopingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
