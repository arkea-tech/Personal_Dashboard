import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService)
    { }

    ngOnInit(): void
    {
    }

    onSubmit(form: NgForm)
    {

        const username = form.value["username"];
        const password =  form.value["password"];
        console.log(form.value);
        this.authService.signUp(username, password).then(
            success => console.log(success)
        ).catch(
            (error) => { console.log(error) }
        );
        //console.log(form.value);
    }

}
