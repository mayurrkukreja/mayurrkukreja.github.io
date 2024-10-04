import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'BreathAI',
      Title: 'Software Developer',
      Date: 'Jan 2024 - Sep 2024',
      Description: [
        'Software developer at BreathAI with a focus on developing and maintaining web applications using Flutter, Python. Javascript, MongoDB, and Firebase',
        'Worked Collaboratively with other Teams and efficiently managed real-time applications',
        'Consulted and updated the workflow of the application using Version Control System - Git and GitHub.',
        'Contributed to initial planning of the Software System and Logical Design by implementing some Core Features like User Authentication using Bluetooth Connection, CRUD Operations, Socket Programming and Payment Gateway Integration using RazorPay API, Co2 Breath Sensing',
        ' Python FastAPI, Flutter, Git for version control, MongoDB, Postman API Tool, Javascript, MVC'
        
      ]
    },


    {
      Tab: 'Deloitte',
      Title: 'Consulting Analyst',
      Date: 'Sep 2023 -  Jan 2023',
      Description: [
        'Consulting Analyst at Deloitte with a focus on developing and maintaining web applications using Salesforce, ReactJs, Apex Programming, and Lightning Web Components',
        'Managed a Salesforce app with 50,000+ records using Apex Programming and SOQL Queries and following Development best practices',
        'Participated in an internal Code-Jam to prototype an application for managing an API service',
        'Contribute to some Core Features of the application like searching and sorting data from the Database to the User Interface using SOQL and SOSL',
        'Automated the workflow of the application using Apex Triggers',


      
      
      
      ]
    },




    {
      Tab: 'Internship',
      Title: 'Flutter Developer',
      Date: 'Mar 2022 - Mar 2023',
      Description: [
        'Built a cross platform application using Flutter SDK and NodeJs',
        'Learnt about Software Program Design Principles and execution',
        'Functional programming in templates and plugins to add the necessary monitoring features.'
      ]
    },
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
