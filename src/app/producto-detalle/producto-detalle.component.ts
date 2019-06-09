import { Component, OnInit,Input } from '@angular/core';
import {Productos} from '../../app/productos';
import {ProductoClass} from '../../app/producto-class';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  @Input() prod: ProductoClass;
  constructor() { }

  ngOnInit() {
  }

}