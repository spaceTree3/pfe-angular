import { Component, Input, OnInit } from '@angular/core';
import { Certificacion } from '../models/certificacion';

@Component({
  selector: 'app-portfolio-certificacion',
  templateUrl: './portfolio-certificacion.component.html',
  styleUrls: ['./portfolio-certificacion.component.css']
})
export class PortfolioCertificacionComponent implements OnInit {

  @Input() certificacion!:Certificacion[];

  constructor() { }

  ngOnInit(){}

}
