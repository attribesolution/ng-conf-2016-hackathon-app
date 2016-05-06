import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CountryService {
 
  public country:String = '';

  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  //http://api.geonames.org/searchJSON?continentCode=as&username=jasonbourne
  // local file : ./src/countries.json

  getCountry() 
  {
    return this.http.get('http://api.geonames.org/countryInfoJSON?formatted=true&lang=it&country='+this.country+'&username=jasonbourne&style=full').map((res:Response) => res.json());
  }

  getNeighbours(geoNameId:String) 
  {
    return this.http.get('http://api.geonames.org/neighboursJSON?geonameId='+geoNameId+'&username=jasonbourne').map((res:Response) => res.json());
  } 
 
}
