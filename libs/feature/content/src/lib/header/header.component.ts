import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ListCitiesFacade } from "@libs/store";

@Component({
  selector: 'weather-forecast-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private facade: ListCitiesFacade) {
  }

  ngOnInit() {
    this.facade.loadContent();
  }
}
