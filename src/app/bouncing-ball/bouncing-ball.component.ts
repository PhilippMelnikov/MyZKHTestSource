import { Component, OnInit } from '@angular/core';

declare let Velocity: any;

@Component({
  selector: 'app-bouncing-ball',
  templateUrl: './bouncing-ball.component.html',
  styleUrls: ['./bouncing-ball.component.css']
})
export class BouncingBallComponent implements OnInit {
  bouncingBall: any;
  speedIndicator: string = '90X';
  paused = false;
  constructor() {
  }

  ngOnInit() {

    this.bouncingBall = document.getElementById('ball');
    let speedRate = 90;
    let duration = 500;
    let pause = false;
    let bounce = () => {
      Velocity(this.bouncingBall, { translateY: '50vh' }, {
        duration: duration,
        easing: 'easeInQuad'
      });
      Velocity(this.bouncingBall, 'reverse', {
        easing: 'easeOutQuad',
        complete: bounce
      });
    }

    bounce();

    this.addOnWheel(window, (e) => {
      let increment = -50;
      if (navigator.appName == 'Microsoft Internet Explorer' ||
        !!(navigator.userAgent.match(/Trident/) ||
          navigator.userAgent.match(/rv:11/))) {
        increment = -increment;
      }

      e = e || window.event;
      let delta = e.deltaY || e.detail || e.wheelDelta;
      if (delta > 0) {
        increment = -increment;
      }
      let newDuration = duration + increment;
      if (newDuration >= 50 && newDuration <= 5000) {
        // stop if 0X
        if (newDuration == 5000) {
          Velocity(this.bouncingBall, "pause");
          pause = !pause;
        }
        else{
          if (pause) {
            pause = !pause;
            Velocity(this.bouncingBall, "resume");
          }
        }
        if (increment > 0){
            --speedRate;
        }
        else {
          ++speedRate;
        }
        this.speedIndicator = speedRate + 'X';
        duration = newDuration;
      }
    })
  }

  addOnWheel(elem, handler) {
    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", handler);
      }
      else {
        if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        }
      }
    }
  }

  toggleAnimation() {
    this.paused = !this.paused;
    if (this.paused) {
      Velocity(this.bouncingBall, "pause");
    }
    else {
      Velocity(this.bouncingBall, "resume");
    }
  }

}
