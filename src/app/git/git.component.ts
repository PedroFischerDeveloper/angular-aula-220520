import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

interface Response {
  name:String,
  full_name:String,
  owner: {
    login: String,
    repos_url: String,
  }
}

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  currentData: Response;
  topName: String;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRepo("Eliude");
  }


  getRepo(user) {
    if(user==="PedroFischerDeveloper") {
      this.topName = "Fischer";
    } else if (user==="EliudeLima") {
      this.topName = "Eliude";
    } else if(user==="WeskleySantos"){
      this.topName = "WeskleySantos";
    }
    this.http.get<Response>('https://api.github.com/users/'+user+'/repos')
    .subscribe(data => {
      console.log(data)
      this.currentData = data;
    });
  }


}
