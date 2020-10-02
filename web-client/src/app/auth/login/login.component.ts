import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loading: boolean = false;
    message: string;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm)
    {
        const username = form.value["username"];
        const password =  form.value["password"];

        this.loading = true;
        this.message = null;
        this.authService.login(username, password).then(
            (message: string) => {
                this.loading = false;
                this.message = message;
                this.router.navigate(['/']);
            }
        ).catch(
            (error) => {
                this.loading = false;
                this.message = error.message;
            }
        );
    }
}
