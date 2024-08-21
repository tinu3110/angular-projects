import { Component } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component {
view: 'grid' | 'list'='list';
sortby: 'default' | 'htl' | 'lth' = 'default';
}
