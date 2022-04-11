import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'weather-forecast-details',
  templateUrl: './details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Details loaded');
  }
}
