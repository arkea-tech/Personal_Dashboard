import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm)
    {
        const username = form.value["username"];
        const password =  form.value["password"];
        this.authService.login(username, password).then(
            success => console.log(success)
        ).catch(
            (error) => { console.log(error) }
        );
    }
}
