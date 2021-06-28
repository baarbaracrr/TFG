import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectprofile',
  templateUrl: './selectprofile.component.html',
  styleUrls: ['./selectprofile.component.css']
})
export class SelectprofileComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('nav-prin').style.display='none';
  }

  ngOnDestroy(): void{
    document.getElementById('nav-prin').style.display='';
  }

}
