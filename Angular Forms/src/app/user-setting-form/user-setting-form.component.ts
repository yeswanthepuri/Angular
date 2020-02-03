import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserSetting } from '../Data/User-setting';
import { UserDataService } from '../Data/user-data.service';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  userSetting: UserSetting;
  //subscriptionTypes = ['Monthly','Annual','Life time'];
  subscriptionTypes: Observable<string[]>;
  singleModel = "On";
  constructor(private dataservice: UserDataService) {
  }

  Onsubmit(form: NgForm) {
    //console.log("in OnSubmit", form.valid);
    this.dataservice.postUserSettingsForm(this.userSetting).subscribe(
      result => console.log('Success:', result),
      error => console.log('Fail:', error)
    );
  }
  Onblur(field: NgModel) {
    console.log("in Onblur", field.valid);
  }
  ngOnInit() {
    this.subscriptionTypes = this.dataservice.getsubscriptionTypes();
    this.dataservice.postUserSettingsForm(this.userSetting);
    this.userSetting = {
      Name: "Krithvika",
      Password: "Saichandra@123",
      emailOffers: true,
      subscriptionType: "Monthly",
      Interfacestyle: "Dark",
      Notes: "Notes",
      startDate : Date.now()
    };
  }

}
