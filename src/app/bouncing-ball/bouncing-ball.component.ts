import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-bouncing-ball',
  templateUrl: './bouncing-ball.component.html',
  styleUrls: ['./bouncing-ball.component.css']
})
export class BouncingBallComponent implements OnInit {
  bouncingBall: any;
  speedIndicator: string = '120 speed units';
  paused = false;
  constructor() {
  }

  ngOnInit() {
    this.bouncingBall = anime({
    targets: '.ball',
    bottom: '0',
    duration: 1600,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic'
  });
  this.addOnWheel(window, (e)=>{
     let $this = this;
     let increment = 0.01;
     if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)))
      {
        increment = -increment;
      }
     e = e || window.event;
     let delta = e.deltaY || e.detail || e.wheelDelta;
     if(delta > 0) increment = -increment;
     let newSpeed = anime.speed + increment;
     if(newSpeed >=1.005 && newSpeed <=4.001){
         anime.speed = Math.fround(newSpeed);
         console.log(anime.speed);
         this.speedIndicator = (anime.speed * 100 - 100).toFixed(0) + ' speed units';
     }

  })
  anime.speed = 2.20;
  }

  addOnWheel(elem, handler) {
      if (elem.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        }
      }
    }

  toggleAnimation(){
    this.paused = !this.paused;
    if(this.paused) this.bouncingBall.pause();
    else this.bouncingBall.play()
  }

}
