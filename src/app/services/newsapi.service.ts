import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class NewsapiService {
   api_key = '716e3f7de699410fa30cae400c2fa4e9';

   constructor(private http: HttpClient) { }

   getArticlesTechnology(): Observable<any> {
      return this.http
         .get(
            `https://newsapi.org/v2/top-headlines?category=technology&language=en&country=it&apiKey=${this.api_key}`
         )
         .pipe(map((data: any) => data.articles));
   }

   getArticlesJavascript(): Observable<any> {
      return this.http
         .get(`https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=${this.api_key}`)
         .pipe(map((data: any) => data.articles));
   }
}
