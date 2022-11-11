import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { skipLast } from 'rxjs';
import { ModalForQueryComponent } from '../modal-for-query/modal-for-query.component';
// import { } from 'googlemaps';

@Component({
  selector: 'app-connect-with-us',
  templateUrl: './connect-with-us.component.html',
  styleUrls: ['./connect-with-us.component.css'],
})
export class ConnectWithUsComponent implements OnInit {
  constructor(private diaLogRef:MatDialog,private router:Router) {}

  ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  zoom = 4;
  getQuery(data:any){
    this.router.navigate(['success']);
    this.diaLogRef.open(ModalForQueryComponent)
  }
}
