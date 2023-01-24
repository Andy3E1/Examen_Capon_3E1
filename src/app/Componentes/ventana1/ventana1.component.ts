import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana1',
  templateUrl: './ventana1.component.html',
  styleUrls: ['./ventana1.component.css']
})
export class Ventana1Component implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {

  }
  nav(){
    this.router.navigate(['web2']);

  }
}
