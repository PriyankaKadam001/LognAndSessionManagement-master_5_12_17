import {Injectable, Inject} from "@angular/core";
import { Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {User} from '../models/user';
Injectable()
export class userService{
//users:User[];
usersUrl:string="https://reqres.in/api/users";
  constructor(@Inject(Http) private http: Http) { }
    
    //grab users
    getUsers():Observable<User[]>{
   return this.http.get(this.usersUrl)
    .map(res=>res.json().data)
    .catch(this.handleError);
    }

private handleError(err){
  let errMessage:string;
      if(err instanceof Response){
        let body=err.json() || '';
        let error= body || JSON.stringify(body);
        errMessage=`${error.status} - ${error.statusText} || ''} ${error}`
      }
      else{
        errMessage=errMessage?errMessage:err.toString();
      }
      return Observable.throw(errMessage);
}
}