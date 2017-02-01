import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Album} from '../../../Album';
import {Artist} from '../../../Artist';
import {SpotifyService} from '../../services/spotify.service'
@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
})
export class ArtistComponent implements OnInit {
    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(
        private _spotifyServive:SpotifyService,
        private _route:ActivatedRoute){

    }
    ngOnInit(){
        this._route.params
            .map(parems => parems['id'])
            .subscribe((id) =>{
                this._spotifyServive.getArtist(id).subscribe(artist => {
                    this.artist = artist;
                })
             });
    }
}
