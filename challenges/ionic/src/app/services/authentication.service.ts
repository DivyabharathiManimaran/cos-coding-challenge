import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'authtoken';
const USER_ID = '';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authKey =  '';
  logedInUserId = '';

  authenticationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private platform: Platform) {
    this.platform.ready().then(()=> {
      this.checkToken();
    });
   }

   /** Headers for URLs which dont need autherisation */
   getHttpOptions() {
    const myHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return myHttpOptions;
  }


   /** Headers for URLs which need autherisation */
   getAuthorisedHttpOptions() {
    const myHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userid': this.logedInUserId,
        'authtoken': this.authKey,
      })
    };
    return myHttpOptions;
  }
  
  /** Login and set autherisation state */
  login(userId:string, authtokenVal: string) {
    this.logedInUserId = userId;
    this.authKey = authtokenVal;
    this.storage.set(TOKEN_KEY, authtokenVal).then(res=> {
      this.authenticationState.next(true);
    });
    this.storage.set(USER_ID, userId).then((res)=> {

    })
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(()=> {
      this.authenticationState.next(false);
    });
    this.storage.remove(USER_ID).then();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  /** Authentication state verification */
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res=> {
      if(res) {
        this.authKey = res;
        this.authenticationState.next(true);
      }
    });
    this.storage.get(USER_ID).then(res => {
      if(res) this.logedInUserId = res;
    }) 
  }

}
