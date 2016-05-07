import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CountriesService {

    constructor (private http: Http) {}
        private countriesUrl = 'http://api.geonames.org/searchJSON?q=country&username=ahsan.ubitian';  // URL to web api
        private neighboursUrl = "http://api.geonames.org/neighboursJSON?username=ahsan.ubitian&country=";
        private countryUrl = "http://api.geonames.org/countryInfoJSON?formatted=true&lang=it&username=ahsan.ubitian&style=full&country=";
        
        getCountries (){
            let url = this.countriesUrl;            //url to be used for call
            return this.http.get(url)
            .map(res => res.json())
            .map((data) => { return data.geonames; });;
        }
        getCountry (countryCode){
            let url = this.countryUrl + countryCode;        //url to be used for call (appending countryCode to make it like '&country=PK')
            return this.http.get(url)
            .map(res => res.json())
            .map((data) => { return data.geonames[0]; }); //since we expect [0] will have our required country
        }
        
        getNeighbours(countryCode){
            let url = this.neighboursUrl + countryCode;     //url to be used for call (appending countryCode to make it like '&country=PK')
            return this.http.get(url)
            .map(res => res.json())
            .map((data) => { return data.geonames; });
        }
}