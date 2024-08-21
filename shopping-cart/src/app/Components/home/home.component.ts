import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  suggestedProducts: SuggestedProduct[]=[
  {
    banerimage: 'banners/boatwp.webp',
    category:{
      id: 0,
      category: 'electronics',
      subCategory: 'mobiles',
    },
  },
  {
    banerimage: 'banners/Baner_Laptop.png',
    category:{
      id: 1,
      category: 'electronics',
      subCategory: 'laptops',
    },
  },
  {
    banerimage: 'banners/Baner_Chair.png',
    category:{
      id: 1,
      category: 'electronics',
      subCategory: 'chairs',
    },
  },
];
constructor() {}

   
}
