import { destroyPlatform, NgModule } from '@angular/core';
  import { NgxPayPalModule } from 'ngx-paypal';
  import {CookieService} from 'ngx-cookie-service';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { SignInComponent } from '../component/sign-in/sign-in.component';
import { SignUpComponent } from '../component/sign-up/sign-up.component';
import { SignOutComponent } from '../component/sign-out/sign-out.component';

import { HomeComponent } from '../component/home/home.component';
import {ResturntComponent } from '../component/resturnt/resturnt.component';
import{AlibabaComponent} from '../component/alibaba/alibaba.component';
import{BalaconaComponent} from '../component/balacona/balacona.component';
import{DispasitooComponent} from '../component/dispasitoo/dispasitoo.component';
import{LamiraComponent} from '../component/lamira/lamira.component';
import{KafiraComponent} from '../component/kafira/kafira.component';
import{ProfileComponent} from '../component/profile/profile.component';
import{ UpdateProfileComponent} from '../component/update-profile/update-profile.component';
import{JulyeComponent} from '../component/julye/julye.component'
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KafiraService } from './servier/kafira.service';
import { LoadComponent } from '../component/load/load.component';
import { LamiraService } from './servier/lamira.service';
import { AlibabaService } from './servier/alibaba.service';
import { DispacitooService } from './servier/dispacitoo.service';
import { JoulyService } from './servier/jouly.service';
import { BalaconaService } from './servier/balacona.service';
import { CartComponent } from 'src/component/cart/cart.component';
import { AlitemComponent } from 'src/component/alitem/alitem.component';
import { JulyitemComponent } from 'src/component/julyitem/julyitem.component';
import { KafiaritemComponent } from 'src/component/kafiaritem/kafiaritem.component';
import { LameraaitemComponent } from 'src/component/lameraaitem/lameraaitem.component';
import { DespacitoitemComponent } from 'src/component/despacitoitem/despacitoitem.component';
import { BalaconaitemComponent } from 'src/component/balaconaitem/balaconaitem.component';
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
import { NoshoppingComponent  } from '../component/noshopping/noshopping.component';
import { SigninService } from './serverLogin/signin.service';
import { SignupService } from './serverLogin/signup.service';
import { SignoutService } from './serverLogin/signout.service';
import { CartServeService } from 'src/cartServe/cart-serve.service';
import { OrderAlibabaComponent } from './componentUpdate/order-alibaba/order-alibaba.component';


@NgModule({
  declarations: [
    SignOutComponent,
    SignInComponent,
    SignUpComponent,
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    LoadComponent,
    FooterComponent,
    BalaconaComponent,
    HomeComponent,
    NotFoundComponent,
    ResturntComponent,
    AlibabaComponent,
    KafiraComponent,
    DispasitooComponent,
    JulyeComponent,
    LamiraComponent,
    CartComponent,
    AlitemComponent,
    JulyitemComponent,
    KafiaritemComponent,
    LameraaitemComponent,
    DespacitoitemComponent,
    BalaconaitemComponent,
    UpdateAliBabaComponent,
    AddDataAliBabaComponent,
    UpdatecafiraComponent,
    KafiarAddComponent,
    UpdateLamiraComponent,
    AddLamiraComponent,
    UpdateDespasittooComponent,
    AddDespacitooComponent,
    UpdatebalaconaComponent,
    AddBalaconaComponent,
    UpdateYoulyComponent,
    AddYoulyComponent,
    NoshoppingComponent,
    OrderAlibabaComponent,
    UpdateProfileComponent

  ],
  imports: [
    NgxPayPalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [KafiraService,LamiraService,CookieService,AlibabaService,DispacitooService,JoulyService,BalaconaService,SigninService,SignupService,SignoutService,CartServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
