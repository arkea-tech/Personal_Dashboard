import { Injectable } from '@angular/core';
import  *  as CryptoJS from  'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    key:string = "123";

    constructor() { }

    private encrypt(txt: string): string {
        return CryptoJS.AES.encrypt(txt, this.key).toString();
    }

    private decrypt(txtToDecrypt: string) {
        return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
    }

    public saveData(key: string, value: string) {
        localStorage.setItem(key, this.encrypt(value));
    }

    public getData(key: string) {
        const value = localStorage.getItem(key) || '';

        return this.decrypt(value);
    }

    public removeData(key: string) {
        localStorage.removeItem(key);
    }

    public clearData() {
        localStorage.clear();
    }

}
