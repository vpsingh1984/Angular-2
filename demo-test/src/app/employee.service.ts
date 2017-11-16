
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmplyeeService{


	private _url: string = "apidata/data.json";
	// private _url: string = "https://swapi.co/api/people/1/";
	constructor(private _http: Http){}

	getEmplyee(){
		return this._http.get(_url)
			.map((response:Response) => response.json());
	}


}