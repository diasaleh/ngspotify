import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Album} from '../../../Album';
import {Artist} from '../../../Artist';
import {SpotifyService} from '../../services/spotify.service'
@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit {
    id:string;
    album:Album[];

    constructor(
        private _spotifyServive:SpotifyService,
        private _route:ActivatedRoute){

    }
    ngOnInit(){
        this._route.params
            .map(parems => parems['id'])
            .subscribe((id) =>{
                this._spotifyServive.getAlbum(id).subscribe(album => {
                    this.album = album;
                })

            });
    }
}
