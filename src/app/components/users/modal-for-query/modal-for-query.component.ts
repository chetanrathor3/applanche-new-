import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-for-query',
  templateUrl: './modal-for-query.component.html',
  styleUrls: ['./modal-for-query.component.css']
})
export class ModalForQueryComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ModalForQueryComponent>) { }

  ngOnInit(): void {
  }
  closeMe(){
    this.dialogRef.close()
  }

}
