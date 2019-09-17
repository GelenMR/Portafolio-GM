import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
import { skills } from '../../models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: skills[];

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public MyserviceService: MyserviceService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-shadowed-variable
    this.MyserviceService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

}
