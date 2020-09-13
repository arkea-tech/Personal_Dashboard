import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor()
    { }

    ngOnInit(): void
    {
    }

    onSubmit(form: NgForm)
    {

        const username = form.value["username"];
        const password =  form.value["password"];
        //console.log(form.value);
    }

}
