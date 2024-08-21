import {Component,
  ElementRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef, } from '@angular/core';
import { Category, NavigationItem } from 'src/app/models/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('modalTitle') modalTitle!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  cartItems: number = 0;

  navigationList: NavigationItem[] = [
    {
      category: "electronics",
      subcategories: ["mobiles", "laptops"]
    },
    {
      category: "furniture",
      subcategories: ["chairs", "tables"]
    }
  ];

  openModal(name: string) {
    this.container.clear();
    let componentType!: Type<any>;
    if (name === 'login') {
      componentType = LoginComponent;
      this.modalTitle.nativeElement.textContent = 'Enter login info';
    }

    if (name === 'register') {
      componentType = RegisterComponent;
      this.modalTitle.nativeElement.textContent = 'Enter registration info';
    }
    this.container.createComponent(componentType);
  }

}
