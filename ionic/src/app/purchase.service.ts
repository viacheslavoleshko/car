import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let dhost;


@Injectable({
    providedIn: 'root'
})


export class PurchaseService {
    static token = 'token';
    static selectedTab = 0;
    private host = 'https://nix.ltd';
    private apiHost = `${this.host}/api/v1`;

    urls = {
        subscribe: `${this.apiHost}/stripe/subscribe`,
        charge: `${this.apiHost}/stripe/charge`,
        subscribeAccept: `${this.apiHost}/stripe/subscribeComplete`,
        isActive: `${this.apiHost}/stripe/subscription/active`,
        mySubscription: `${this.apiHost}/stripe/subscription/getMy`,
        getPlan: `${this.apiHost}/stripe/getPlans`,
        notifyStatus: `${this.apiHost}/notifications/status`
    };

    constructor(public http: HttpClient) {
        console.log('Api Provider');
        console.log('Setting new host' + dhost);
        this.setHost(dhost);

    }

    setHost(hostt) {
        if (hostt === undefined) {
            return;
        }
        this.host = hostt;
        this.apiHost = `${this.host}/api/v1`;
    }

    getToken() {
        return PurchaseService.token;
    }


     async charge(): Promise<any> {
        return this.http.get(this.urls.charge, {headers: {Token: this.getToken()}});
     }
    async subscribe(token: string, plan: string, email: string) {
        const body = {
            cardToken: token,
            plan,
            email
        };


    }


    getApiHost() {
        return this.apiHost;
    }
    getTokens(regNumb) {
        return this.http.get(`http://localhost/stripe/${regNumb}`);
    }
    confirm(id, regNumb) {
        //let headers = {"token": id, "regNumb": regNumb };
        let headers = new HttpHeaders().set('token',id).set('regNumb', regNumb);
        return this.http.get('http://localhost/confirm', {headers: headers});
    }


}
