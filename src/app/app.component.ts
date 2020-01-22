import { Component } from '@angular/core';
import { AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: any[];
  searchEmail: string;
  constructor(private appService: AppService) {
  
  }
  ngOnInit() {
   this.appService.getList().subscribe((data:any)=>{
      
      this.list = data.data;
      console.log(this.list);
    },
    (err) => {
        console.log(err);
    });
  }
}
