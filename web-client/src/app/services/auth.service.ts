import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    token: string;
    userId: string;
    isAuth$ = new BehaviorSubject<boolean>(false);
    //userId: string;

    constructor(private http: HttpClient)
    {}

    signUp(username: string, password: string)
    {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:8080/api/auth/signup',
            {
                username: username,
                password: password
            }).subscribe(
                () => {
                    resolve('User Created');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    login(username: string, password: string)
    {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:8080/api/auth/login',
            {
                username: username,
                password: password
            }).subscribe(
                (authData: { token: string, userId: string }) => {
                    this.token = authData.token;
                    this.userId = authData.userId;
                    resolve('Success !');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

};
