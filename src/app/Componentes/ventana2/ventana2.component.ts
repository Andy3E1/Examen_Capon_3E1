import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana2',
  templateUrl: './ventana2.component.html',
  styleUrls: ['./ventana2.component.css']
})
export class Ventana2Component implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
  }
}
