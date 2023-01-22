import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlibabaService } from 'src/app/servier/alibaba.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { CartServeService } from 'src/cartServe/cart-serve.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;

  constructor(
    private myActivated: ActivatedRoute,
    private myService: CartServeService
  ) {}
  
 
  changeButton = 0;
  total: any = 0;
  total1: any = 0;
  total2: any = 0;
  total3: any = 0;
  total4: any = 0;
  total5: any = 0;role="user"

  clickButt() {
    this.changeButton = 1;
  }
  cartProducts: any;
  // cartFood: any[] = [];
  user:any=localStorage.getItem("user");
  data=JSON.parse(this.user)
  balaconacartFood: any[] = [];
  DesbacitocartFood: any[] = [];
  julycartFood: any[] = [];
  kafiarcartFood: any[] = [];
  lamiracartFood: any[] = [];

  @Input() product: any;
  @Output() item = new EventEmitter();
  owner: any;
  items: any;
  itemId: any;
  balaconaItems: any;
  ngOnInit(): void {
    this.initConfig();
    this.getCartProducts();
    this.getCartProducts1()
  }
  // id:any
  getCartProducts() {
    console.log('aaaaaaaaa');

    this.myService.getAlibabaProductinCart().subscribe({
      next: (data: any) => {
        console.log(data);
        // this.owner = localStorage.getItem('user'),

        this.items = data;
        console.log(this.items);
        JSON.stringify(data);
        console.log(data);
        this.total = data.bill;
        // console.log(this.total)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProduct(itemId: any) {
    console.log(this.items.items);

    console.log(itemId);

    this.myService.deleteAlibabaProductfromCart(itemId).subscribe({
      next: (data) => {
        console.log(data);
       },
      error: (err) => {
        console.log(err);
      },
    });
    location.reload();
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.items) {
      this.total += this.items[x].item.price * this.items[x].quantity;
    }
  }

  clearAll() {
    this.items = [];
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  add(index: number) {
    this.items[index].quantity++;
    this.getCartTotal();
  }

  mins(index: number) {
    this.items[index].quantity--;
    this.getCartTotal();
  }

  //////////////   Balacona   /////////////////////////////////////////////////

  getCartProducts1() {
    console.log('bbbbbbbbbbb');

    this.myService.getbalaconaProductinCart().subscribe({
      next: (data: any) => {
        console.log(data);
        // this.owner = localStorage.getItem('user'),

        this.balaconaItems = data;
        console.log(this.balaconaItems);
        JSON.stringify(data);
        console.log(data);
        this.total1 = data.bill;
        // console.log(this.total)
      },
      error: (error) => {
        console.log(error);
      },
    });
    
  }











  deleteProduct1(index: number) {
    this.balaconacartFood.splice(index, 1);
    this.getCartTotal1();
    localStorage.setItem('cart1', JSON.stringify(this.balaconacartFood));
  }

  getCartTotal1() {
    this.total1 = 0;
    for (let b in this.balaconacartFood) {
      this.total1 +=
        this.balaconacartFood[b].item.price * this.balaconacartFood[b].quantity;
    }
  }

  clearAll1() {
    this.balaconacartFood = [];
    this.getCartTotal1();
    localStorage.setItem('cart1', JSON.stringify(this.balaconacartFood));
  }

  detectChange1() {
    localStorage.setItem('cart1', JSON.stringify(this.balaconacartFood));
  }

  add1(index: number) {
    this.balaconacartFood[index].quantity++;
    this.getCartTotal1();
    localStorage.setItem('cart1', JSON.stringify(this.balaconacartFood));
  }

  mins1(index: number) {
    this.balaconacartFood[index].quantity--;
    this.getCartTotal1();
    localStorage.setItem('cart1', JSON.stringify(this.balaconacartFood));
  }

  // ////////////////////       Desbacito cartFood      /////////////////////////////////////

  getCartProducts2() {
    if ('cart2' in localStorage) {
      this.DesbacitocartFood = JSON.parse(localStorage.getItem('cart2')!);
    }
    // console.log(this.cartFood)
    this.getCartTotal2();
  }
  deleteProduct2(index: number) {
    this.DesbacitocartFood.splice(index, 1);
    this.getCartTotal2();
    localStorage.setItem('cart2', JSON.stringify(this.DesbacitocartFood));
  }

  getCartTotal2() {
    this.total2 = 0;
    for (let d in this.DesbacitocartFood) {
      this.total2 +=
        this.DesbacitocartFood[d].item.price *
        this.DesbacitocartFood[d].quantity;
    }
  }

  clearAll2() {
    this.DesbacitocartFood = [];
    this.getCartTotal2();
    localStorage.setItem('cart2', JSON.stringify(this.DesbacitocartFood));
  }

  detectChange2() {
    localStorage.setItem('cart2', JSON.stringify(this.DesbacitocartFood));
  }

  add2(index: number) {
    this.DesbacitocartFood[index].quantity++;
    this.getCartTotal2();
    localStorage.setItem('cart2', JSON.stringify(this.DesbacitocartFood));
  }

  mins2(index: number) {
    this.DesbacitocartFood[index].quantity--;
    this.getCartTotal2();
    localStorage.setItem('cart2', JSON.stringify(this.DesbacitocartFood));
  }

  // /////////////////     july cartFood          ////////////////////////////////////////////////////////////////

  getCartProducts3() {
    if ('cart3' in localStorage) {
      this.julycartFood = JSON.parse(localStorage.getItem('cart3')!);
    }
    // console.log(this.cartFood)
    this.getCartTotal3();
  }
  deleteProduct3(index: number) {
    this.julycartFood.splice(index, 1);
    this.getCartTotal3();
    localStorage.setItem('cart3', JSON.stringify(this.julycartFood));
  }

  getCartTotal3() {
    this.total3 = 0;
    for (let x in this.julycartFood) {
      this.total3 +=
        this.julycartFood[x].item.price * this.julycartFood[x].quantity;
    }
  }

  clearAll3() {
    this.julycartFood = [];
    this.getCartTotal3();
    localStorage.setItem('cart3', JSON.stringify(this.julycartFood));
  }

  detectChange3() {
    localStorage.setItem('cart3', JSON.stringify(this.julycartFood));
  }

  add3(index: number) {
    this.julycartFood[index].quantity++;
    this.getCartTotal3();
    localStorage.setItem('cart3', JSON.stringify(this.julycartFood));
  }

  mins3(index: number) {
    this.julycartFood[index].quantity--;
    this.getCartTotal3();
    localStorage.setItem('cart3', JSON.stringify(this.julycartFood));
  }

  // ///////////////////       kafiar  cartFood      ///////////////////////////////////////////

  getCartProducts4() {
    if ('cart4' in localStorage) {
      this.kafiarcartFood = JSON.parse(localStorage.getItem('cart4')!);
    }
    // console.log(this.cartFood)
    this.getCartTotal4();
  }
  deleteProduct4(index: number) {
    this.kafiarcartFood.splice(index, 1);
    this.getCartTotal4();
    localStorage.setItem('cart4', JSON.stringify(this.kafiarcartFood));
  }

  getCartTotal4() {
    this.total4 = 0;
    for (let x in this.kafiarcartFood) {
      this.total4 +=
        this.kafiarcartFood[x].item.price * this.kafiarcartFood[x].quantity;
    }
  }

  clearAll4() {
    this.kafiarcartFood = [];
    this.getCartTotal4();
    localStorage.setItem('cart4', JSON.stringify(this.kafiarcartFood));
  }

  detectChange4() {
    localStorage.setItem('cart4', JSON.stringify(this.kafiarcartFood));
  }

  add4(index: number) {
    this.kafiarcartFood[index].quantity++;
    this.getCartTotal4();
    localStorage.setItem('cart4', JSON.stringify(this.kafiarcartFood));
  }

  mins4(index: number) {
    this.kafiarcartFood[index].quantity--;
    this.getCartTotal4();
    localStorage.setItem('cart4', JSON.stringify(this.kafiarcartFood));
  }

  // /////////////////     lamira cartFood      /////////////////////////////////////////////

  getCartProducts5() {
    if ('cart5' in localStorage) {
      this.lamiracartFood = JSON.parse(localStorage.getItem('cart5')!);
    }
    // console.log(this.cartFood)
    this.getCartTotal5();
  }
  deleteProduct5(index: number) {
    this.lamiracartFood.splice(index, 1);
    this.getCartTotal5();
    localStorage.setItem('cart5', JSON.stringify(this.lamiracartFood));
  }

  getCartTotal5() {
    this.total5 = 0;
    for (let x in this.lamiracartFood) {
      this.total5 +=
        this.lamiracartFood[x].item.price * this.lamiracartFood[x].quantity;
    }
  }

  clearAll5() {
    this.lamiracartFood = [];
    this.getCartTotal5();
    localStorage.setItem('cart5', JSON.stringify(this.lamiracartFood));
  }

  detectChange5() {
    localStorage.setItem('cart5', JSON.stringify(this.lamiracartFood));
  }

  add5(index: number) {
    this.lamiracartFood[index].quantity++;
    this.getCartTotal5();
    localStorage.setItem('cart5', JSON.stringify(this.lamiracartFood));
  }

  mins5(index: number) {
    this.lamiracartFood[index].quantity--;
    this.getCartTotal5();
    localStorage.setItem('cart5', JSON.stringify(this.lamiracartFood));
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: '9.99',
                breakdown: {
                  item_total: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        this.changeButton = 0;
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
