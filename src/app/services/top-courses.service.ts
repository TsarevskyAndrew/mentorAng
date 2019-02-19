import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TopCoursesService {

    constructor() {
    }

    consoleText(text) {
        console.log(text);
    }
}
