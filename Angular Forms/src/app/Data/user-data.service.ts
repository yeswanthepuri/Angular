import { Injectable } from '@angular/core';
import { UserSetting } from './User-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  postUserSettingsForm(userSetting: UserSetting): Observable<any> {
    return this.http.post('https://putsreq.com/zROmMjg3gc98kNyWgz1N', userSetting);
    //return of(userSetting);
  }
  getsubscriptionTypes(): Observable<string[]>
  {
    return of(['Monthly','Annual','Life time']);
  }
}
