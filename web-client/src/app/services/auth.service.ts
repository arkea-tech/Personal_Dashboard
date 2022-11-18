import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

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
        //this.isAuth$.next(false);
        this.userId = null;
        this.localStorageService.removeData("token");
        //this.token = null;
    }

    getToken():string
    {
        return this.localStorageService.getData("token");
    }

};
