import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProfileService {

    profileId: string;

    constructor(private http: HttpClient)
    {}

    addProfile(birthdate: string, jobTitle: string, gender: string, description: string)
    {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:8080/profile', {
                birthdate: birthdate,
                jobTitle: jobTitle,
                gender: gender,
                description: description
            }).subscribe(
                (profileData: { message: string, profileId: string }) => {
                    this.profileId = profileData.profileId;
                    resolve(profileData.message);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

};
