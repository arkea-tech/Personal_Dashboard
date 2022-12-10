import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

    //token: string;
    userId: string;
    //isAuth$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private localStorageService: LocalStorageService)
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
                    //this.token = data.token;
                    this.userId = data.userId;
                    this.localStorageService.saveData("token", data.token);
                    //this.isAuth$.next(true);
                    resolve(data.message);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    logout()
    {
        this.userId = null;
        this.localStorageService.removeData("token");
    }

    isTokenExpired(): boolean {
        const token: string = this.localStorageService.getData("token");
        const decodedToken: { [key: string]: string } = jwt_decode(token);
        const expiryTime: number = Number(decodedToken.exp);

        if (expiryTime) {
            return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        }
        else
            return false;
    }

    getToken(): string
    {
        return this.localStorageService.getData("token");
    }

};
