import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
   }
   getReleases(){
     let headers=new HttpHeaders({
      Authorization:'Bearer BQAWkPXPdMzYA1cMYJwrvGBEHAFoExyvkqsLWIgKDlBhq4kFrT7kvmXxO-ge-5VuwKhH-bYLjpnJftTgUJM' 
     });
    return  this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtista(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQAWkPXPdMzYA1cMYJwrvGBEHAFoExyvkqsLWIgKDlBhq4kFrT7kvmXxO-ge-5VuwKhH-bYLjpnJftTgUJM' 
     });
    return  this.http.get('https://api.spotify.com/v1/artists/'+ id,{headers});
  }

  getArtists(termino:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQAWkPXPdMzYA1cMYJwrvGBEHAFoExyvkqsLWIgKDlBhq4kFrT7kvmXxO-ge-5VuwKhH-bYLjpnJftTgUJM' 
     });
    return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});

  }
  
}
