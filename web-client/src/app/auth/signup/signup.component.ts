import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import '@vaadin/vaadin-date-picker';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    loading: boolean = false;
    message: string;

    constructor(private authService: AuthService,
    private profileService: ProfileService)
    {}

    ngOnInit(): void
    {
    }

    onSubmit(form: NgForm)
    {
        const username = form.value["username"];
        const password =  form.value["password"];
        const details = {
            birthdate: form.value["birthdate"],
            gender: form.value["gender"],
            jobTitle: form.value["job_title"],
            description: form.value["description"]
        };

        this.loading = true;
        this.message = null;
        this.authService.signUp(username, password).then(
            (message) => {
                console.log(message);
                this.profileService.addProfile(details.birthdate, details.jobTitle, details.gender, details.description).then(
                    (message: string) => {
                        this.loading = false;
                        this.message = message;
                    }
                ).catch(
                    (error) => {
                        this.loading = false;
                        this.message = error.message;
                    }
                );
            }
        ).catch(
            (error) => {
                this.loading = false;
                this.message = error.message;
            }
        );
    }

}
