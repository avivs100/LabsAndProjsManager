import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-to-photo',
  templateUrl: './details-to-photo.component.html',
  styleUrls: ['./details-to-photo.component.css']
})
export class DetailsToPhotoComponent implements OnInit, OnDestroy {
  @Input() 
  aviv! :string ;
  @Input() 
  ohad! :string ;
  @Input() 
  sagi! :string ;

  isAviv : boolean = false;
  isSagi : boolean = false;
  isOhad : boolean = false;
  avivAudio = new Audio();
  sagiAudio = new Audio();
  ohadAudio = new Audio();
  
  constructor() { }
  ngOnDestroy(): void {
    this.avivAudio.pause();
    this.sagiAudio.pause();
    this.ohadAudio.pause();
  }

  ngOnInit(): void {
    this.avivAudio.src = "../assets/executioner.wav";
    this.sagiAudio.src = "../assets/john.wav";
    this.ohadAudio.src = "../assets/rey.wav";
  }

  onClick1(){
    this.isAviv = !this.isAviv;
    this.avivAudio.load();
    this.playAudio("aviv",this.isAviv);    
  }

  onClick2(){
    this.isOhad = !this.isOhad;
    this.ohadAudio.load();
    this.playAudio("ohad",this.isOhad);
  }

  onClick3(){
    this.isSagi = !this.isSagi;
    this.sagiAudio.load();
    this.playAudio("sagi",this.isSagi);
  }

  playAudio(who:string ,playOrNot:boolean):void{
    switch(who){
      case "aviv":{
        if(playOrNot){
          this.avivAudio.play();
          this.sagiAudio.pause();
          this.ohadAudio.pause();
          this.isSagi = false;
          this.isOhad = false;
        }
        else{
          this.avivAudio.pause();
        }
        break;
      }
      case "sagi":{
        if(playOrNot){
          this.sagiAudio.play();
          this.ohadAudio.pause();
          this.avivAudio.pause();
          this.isAviv = false;
          this.isOhad = false;
        }
        else{
          this.sagiAudio.pause();
        }
        break;
      }
      case "ohad":{
        if(playOrNot){
          this.ohadAudio.play();
          this.avivAudio.pause();
          this.sagiAudio.pause();
          this.isSagi = false;
          this.isAviv = false;
        }
        else{
          this.ohadAudio.pause();
        }
        break;
      }
    }    
  }
  

}
