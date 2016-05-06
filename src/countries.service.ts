import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CountriesService {
 
  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  //http://api.geonames.org/searchJSON?continentCode=as&username=jasonbourne
  // local file : ./src/countries.json
  //http://api.geonames.org/countryInfoJSON?formatted=true&lang=it&country=DE&username=jasonbourne&style=full


  getCountries() {
    return this.http.get('http://api.geonames.org/searchJSON?continentCode=as&username=jasonbourne').map((res:Response) => res.json());
  }
 
 
}


// @Injectable()
// export class CountryService {
//   constructor (private http: Http) {}
//   private countriesUrl = 'http://api.geonames.org/searchJSON?continentCode=as&username=jasonbourne';  // URL to web api
//   getCountries (): Observable<Country[]> {
//     return this.http.get(this.countriesUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
//   private extractData(res: Response) {
//     if (res.status < 200 || res.status >= 300) {
//       throw new Error('Bad response status: ' + res.status);
//     }
//     let body = res.json();
//     return body.data || { };
//   }
//   private handleError (error: any) {
//     // In a real world app, we might send the error to remote logging infrastructure
//     let errMsg = error.message || 'Server error';
//     console.error(errMsg); // log to console instead
//     return Observable.throw(errMsg);
//   }
// }