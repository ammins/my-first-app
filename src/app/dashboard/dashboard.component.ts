import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PserviceService } from '../pservice.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  
  plist:any;
  constructor( private service: PserviceService) {

   }

   loadTableData() 
   {
    this.service.getProductList()
    .pipe(catchError((err) => of(console.log(err))))
      .subscribe((result) => {
       
        this.plist=result;
        console.log(this.plist);
    });

   }
}
