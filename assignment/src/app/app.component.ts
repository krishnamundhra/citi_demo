import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { appConfig } from '../app/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit {

  public appID = appConfig.applicationData.appid;
  public fullAPIServiceUrl: any;
  public users: any;
  usersProfile: any;
  public httpHeader = new HttpHeaders({
      "app-id": "",
      "Content-Type": "application/json"
  });
  
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  }

public getUsersService() {
 this.fullAPIServiceUrl = "https://dummyapi.io/data/v1/user?limit=50"; //to get 50 users list
 this.httpHeader = new HttpHeaders({ 
      "app-id": "613ba1a7c60cff50cb8a704e",
      "Content-Type": "application/json"
      });
      return this.httpClient.get(this.fullAPIServiceUrl, { headers: this.httpHeader });
}

public getUsersProfile() {
  this.fullAPIServiceUrl = "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109e4"; //to get one user details
  this.httpHeader = new HttpHeaders({ 
       "app-id": "613ba1a7c60cff50cb8a704e",
       "Content-Type": "application/json"
       });
       return this.httpClient.get(this.fullAPIServiceUrl, { headers: this.httpHeader });
 }


getUserslist () {
  this.getUsersService().subscribe(
    data => {
        this.users = data;
       //console.log(this.users);
    },
    error => { 
        console.log("error");
    });
}

getUsersprofile () {
  this.getUsersProfile().subscribe(
    res => {
        this.usersProfile = res;
        console.log(this.usersProfile);
    },
    error => { 
        console.log("error");
    });
}

}

