import { Component } from '@angular/core';
import {HTTPService} from './http.service';
@Component({
	moduleId: module.id,
    selector: 'bs-component',
    templateUrl: './bs-component.component.html',
		providers: [HTTPService]
})

export class BSComponentComponent {
	getData: string;

	constructor (private _httpservice: HTTPService){}

	onget(){
		this._httpservice.getCurrentTime()
			.subscribe(
					data => this.getData = JSON.stringify(data),
					error => alert(error),
					()=>console.log("finsihed request")
			);
	}
}
