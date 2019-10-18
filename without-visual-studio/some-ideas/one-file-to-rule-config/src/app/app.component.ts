import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from './global-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'one-file-to-rule-config';

  constructor(private globalEnv: GlobalConfigService) {

    console.log(globalEnv.getApiUrl());
  }

  ngOnInit(): void {
    console.log('loading appcomponent');
  }

}
