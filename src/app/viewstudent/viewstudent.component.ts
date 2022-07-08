import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
 data=[
  {"name":"riya","age":20,"photo":"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"}, 
   {"name":"luha","age":19,"photo":"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"},
   {"name":"hanana","age":19,"photo":"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"},
   {"name":"lubna","age":19,"photo":"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"},
   {"name":"isha","age":19,"photo":"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"}





]
}
