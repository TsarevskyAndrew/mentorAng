import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    login = '';
    password = '';

    onSubmit() {

        console.log('Submit pressed', event);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
