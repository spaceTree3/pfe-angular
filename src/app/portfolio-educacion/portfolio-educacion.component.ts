import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from '../models/educacion';

@Component({
  selector: 'app-portfolio-educacion',
  templateUrl: './portfolio-educacion.component.html',
  styleUrls: ['./portfolio-educacion.component.css']
})
export class PortfolioEducacionComponent implements OnInit {
  @Input() educacion!:Educacion[];


  constructor() { }

  ngOnInit(){  }


}
