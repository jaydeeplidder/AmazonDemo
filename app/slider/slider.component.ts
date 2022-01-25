import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let slideIndex:number = 0;
    slider();
    
    function slider() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].setAttribute("style", "display:none;");
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1} 
      x[slideIndex-1].setAttribute("style", "display:block;");
      setTimeout(slider, 3000); 
    }

    
     
  }

}
