import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { User } from './users';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  userName: string;
  skillsSets: string[];
  @ViewChild('userNameRef', { static: false }) userNameRefElement: ElementRef;
  @ViewChild('skillsSetRef', { static: false }) skillsSetRefElement: ElementRef;

  skillsSet: any;
  skills: string[] = [];
  users: User[] = [];
  // userName: any;
  isInsert: boolean;

  onSkillsSetKeydown() {
    // tslint:disable-next-line: triple-equals
    if (this.skillsSet == '' || this.skillsSet == null) { return; }
    this.skills.push(this.skillsSet);
    this.skillsSet = '';
  }

  dropSkill(index: any) {
    this.skills.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
    this.isInsert = true;
  }
  selectUser(user: User) {
    this.isInsert = false;
    this.userName = user.userName;
    this.skills = user.skillsSets;
    this.skillsSet = '';
  }

  newOrCancel() {
    this.isInsert = true;
    this.userName = '';
    this.skillsSet = '';
    this.skills = [];
    this.userNameRefElement.nativeElement.focus();
  }

  saveUser() {
    let user: User = {
      userName: '',
      skillsSets: []
    };
    user.userName = this.userName;
    user.skillsSets = this.skills;
    this.users.push(user);
    this.newOrCancel();
  }

  skillsSetFocus() {
    this.skillsSetRefElement.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 83) {
      $event.preventDefault();
      if (this.skills.length > 0 && this.userName != null && this.userName != '' && this.isInsert == true) {
        this.saveUser();
      }
    }

  }
}


