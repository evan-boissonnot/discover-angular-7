import { Component, OnInit } from '@angular/core';
import { Test01Service } from '../../services/test01.service';
import { Test02WithoutInjectable } from '../../services/test02-without-injectable';
import { Test03InsideChildModule } from '../../services/test03-inside-child-module';
import { Test05InsideThirdModuleService } from '../../services/test05-inside-third-module.service';

@Component({
  selector: 'app-c1-first',
  templateUrl: './c1-first.component.html',
  styleUrls: ['./c1-first.component.css']
})
export class C1FirstComponent implements OnInit {

  constructor(private service: Test01Service, private service2: Test02WithoutInjectable, private service3: Test03InsideChildModule,
              private service05: Test05InsideThirdModuleService) {
    this.service.log('construct C1FIrst');
    console.log(`${Test05InsideThirdModuleService.name}`, this.service05);

   }

  ngOnInit() {
    this.service.log('init C1FIrst');
  }

}
