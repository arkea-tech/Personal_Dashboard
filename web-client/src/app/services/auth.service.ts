import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    token: string;
    userId: string;
    isAuth$ = new BehaviorSubject<boolean>(false);

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
                (data: { message: string }) => {
                    resolve(data.message);
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
                (data: { message: string, token: string, userId: string }) => {
                    this.token = data.token;
                    this.userId = data.userId;
                    this.isAuth$.next(true);
                    resolve(data.message);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    logout() {
        console.log('here');
        this.isAuth$.next(false);
        this.userId = null;
        this.token = null;
    }

};
