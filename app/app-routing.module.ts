import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmazonItemsComponent } from './amazon-items/amazon-items.component';
import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import { LaptopContentComponent } from './laptop-content/laptop-content.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {
    path:'',
    component:MainComponent
  },
{
  path:'header',
  component:HeaderComponent
},
{
  path:'amazon-items',
  component:AmazonItemsComponent
},
{
  path:'laptop-content',
  component:LaptopContentComponent
},
{
  path:'footer',
  component:FooterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
