import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the FoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodProvider {

  constructor(private httpClient: HttpClient) {
  }

  getListAllFood(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get("assets/data.json").subscribe(
        s => {
          resolve(s);
        },
        e => {
          reject(e);
        }
      )
    })
  }

  getListAllFood1(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get("https://taco-food-api.herokuapp.com/api/v1/food").subscribe(
        s => {
          resolve(s);
        },
        e => {
          reject(e);
        }
      )
    })
  }

}
