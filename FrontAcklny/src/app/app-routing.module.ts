import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResturntComponent } from '../component/resturnt/resturnt.component';
import{AlibabaComponent} from '../component/alibaba/alibaba.component';
import{BalaconaComponent} from '../component/balacona/balacona.component';
import{DispasitooComponent} from '../component/dispasitoo/dispasitoo.component';
import{LamiraComponent} from '../component/lamira/lamira.component';
import { HomeComponent } from '../component/home/home.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { KafiraComponent } from 'src/component/kafira/kafira.component';
import{JulyeComponent} from '../component/julye/julye.component'
import { CartComponent } from 'src/component/cart/cart.component';
import { UpdateAliBabaComponent } from './componentUpdate/update-ali-baba/update-ali-baba.component';
import { AddDataAliBabaComponent } from './componentUpdate/update-ali-baba/add-data-ali-baba/add-data-ali-baba.component';
import { UpdatecafiraComponent } from './componentUpdate/updatecafira/updatecafira.component';
import { KafiarAddComponent } from './componentUpdate/updatecafira/kafiar-add/kafiar-add.component';
import { UpdateLamiraComponent } from './componentUpdate/update-lamira/update-lamira.component';
import { AddLamiraComponent } from './componentUpdate/update-lamira/add-lamira/add-lamira.component';
import { UpdateDespasittooComponent } from './componentUpdate/update-despasittoo/update-despasittoo.component';
import { AddDespacitooComponent } from './componentUpdate/update-despasittoo/add-despacitoo/add-despacitoo.component';
import { UpdatebalaconaComponent } from './componentUpdate/updatebalacona/updatebalacona.component';
import { AddBalaconaComponent } from './componentUpdate/updatebalacona/add-balacona/add-balacona.component';
import { UpdateYoulyComponent } from './componentUpdate/update-youly/update-youly.component';
import { AddYoulyComponent } from './componentUpdate/update-youly/add-youly/add-youly.component';
import { SignInComponent } from 'src/component/sign-in/sign-in.component';
import { SignUpComponent } from 'src/component/sign-up/sign-up.component';
import { OrderAlibabaComponent } from './componentUpdate/order-alibaba/order-alibaba.component';
import { ProfileComponent } from 'src/component/profile/profile.component';
import { UpdateProfileComponent } from 'src/component/update-profile/update-profile.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},

  {path:'home/resturnt',component:ResturntComponent},
  {path:'resturnt',component:ResturntComponent},
  {path:'home/resturnt/kafira',component: KafiraComponent},
  {path:'home/resturnt/lamira',component: LamiraComponent},
  {path:'home/resturnt/dispasitoo',component: DispasitooComponent},
  {path:'home/resturnt/balacona',component: BalaconaComponent},
  {path:'home/resturnt/alibaba',component: AlibabaComponent},
  {path:'home/resturnt/julye',component:JulyeComponent},
  {path:'resturnt/kafira',component: KafiraComponent},
  {path:'resturnt/lamira',component: LamiraComponent},
  {path:'resturnt/dispasitoo',component: DispasitooComponent},
  {path:'resturnt/balacona',component: BalaconaComponent},
  {path:'resturnt/alibaba',component: AlibabaComponent},
  {path:'resturnt/julye',component:JulyeComponent},
  {path:'add/cart',component:CartComponent},
  {path:"UpdateAli",component:UpdateAliBabaComponent},
  {path:"UpdateAli/addAli",component:AddDataAliBabaComponent},
  {path:"updatekafira",component:UpdatecafiraComponent},
  {path:"updatekafira/addKaiar",component: KafiarAddComponent},
  {path:"updatelamira",component:UpdateLamiraComponent},
  {path:"updatelamira/addLamira",component: AddLamiraComponent},
  {path:"updatedespacitoo",component:UpdateDespasittooComponent},
  {path:"updatedespacitoo/addDes",component:AddDespacitooComponent},
  {path:"updateBalacona",component:  UpdatebalaconaComponent},
  {path:"updateBalacona/addBala",component:AddBalaconaComponent},
  {path:"updateYouly",component:  UpdateYoulyComponent},
  {path:"updateYouly/addYouly",component:AddYoulyComponent},
  {path:"signin",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profile/update",component: UpdateProfileComponent},
  {path:"UpdateAli/orderAli",component:OrderAlibabaComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
