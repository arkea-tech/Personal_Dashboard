import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getYear } from 'date-fns';
import { DatepickerOptions } from 'ng2-datepicker';

import { clearForm } from '../../../../utils/form';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

    clearForm: (form: NgForm) => void;
    birthdate: string;
    datePickerOptions: DatepickerOptions = {
        minYear: getYear(new Date()) - 150,
        maxYear: getYear(new Date()),
        firstCalendarDay: 1,
        placeholder: "Select your birthdate..."
    };

    constructor() { }

    ngOnInit(): void {
      this.clearForm = clearForm;
      this.birthdate = "";
    }

    onSubmitForm(form: NgForm)
    {
        let username: string = "";
        let bio: string = "";
        let gender: string = "";
        let jobTitle: string = "";
        let birthdate: string = "";
        let picture: string = "";

        username = form.value["username"];
        bio = form.value["bio"];
        gender = form.value["gender"];
        jobTitle = form.value["job"];
        birthdate = form.value["birthdate"];
        picture = form.value["picture"];
        this.clearForm(form);
        console.log("username: " + username
        + "\nbio: " + bio + "\ngender: " + gender + "\njob title: " + jobTitle + "\npicture: " + picture + "\nbirthdate: " + birthdate);
    }

}
