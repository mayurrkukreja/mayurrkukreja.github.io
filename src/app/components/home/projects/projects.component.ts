import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class projectsComponent implements OnInit {
  Projects = [

    {
      
      imgs:[
        '../../../../assets/images/workout-planner/home-screen.png',

        ],
      Title:'Workout Planner',
      Description:`Workout Planner is a basic web application that allows users to create and manage their workout plans. Users can add new exercises to their workout plan, specify the number of sets and repetitions, and track their progress over time. The app also includes a timer feature to help users time their workouts and rest periods.`,
      Technologies:['ReactJs','CSS','React-Material' , 'MongoDb', 'NodeJs'],
      ghLink:'https://github.com/mayurrkukreja/Workout-Planner-Frontend',
      demoLink:'https://workout-planner-frontend.vercel.app'
    },





    {
      
      imgs:[
        '../../../../assets/images/bank/banking-project.png'
        ],
      Title:'Basic Banking System',
      Description:"The Basic Banking System is a simple web application that allows users to transfer money between accounts, view transaction history, and check account balances. The app also includes a feature to add new customers to the system and update their account details.",
      Technologies:['PHP','CSS','MySQL' , 'Apache', 'HTML'],
      ghLink:'https://github.com/mayurrkukreja/Bank-PHP',
      demoLink:'https://www.youtube.com/watch?v=BCT4n6a22ZI&t=4s'
    },




    {
      
      imgs:[
        '../../../../assets/images/medi-space/medi-space-1.png',
        '../../../../assets/images/medi-space/medi-space-2.png'],
      Title:'Medi-Space',
      Description:'Getting a proper health facility is a dream for all. Not all government hospitals have good facilities, equipment, or experienced staff to take care of the people of that city. This issue can be resolved if all the government hospitals work collaboratively and ensure good facilities are provided to all. For example, consider in a small town, a government hospital does not have the equipment to treat the patient. So, the hospital referred that patient to a more equipped government hospital near to the city. Now the patient feels helpless to go to the referred government hospital and explain his/her illness, as they now must follow the same procedure as followed before in the small-town government hospital to get information about the illness like going through the same tests, same checkups. This app aims to develop a prototype to solve this issue.',
      Technologies:['Flutter','Dart','Firebase Auth' , 'Firestore'],
      ghLink:'https://github.com/mayurrkukreja/Medi-Space',
      demoLink:''
    },

    {
      imgs:[
        '../../../../assets/images/hosp-management/hosp-management-1.png',
        '../../../../assets/images/hosp-management/hosp-management-2.png',
        '../../../../assets/images/hosp-management/hosp-management-3.png',
        '../../../../assets/images/hosp-management/hosp-management.png',
      ],
      Title:'Hospital management system',
      Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS'],
      ghLink:'https://github.com/mayurrkukreja/Donation-Management-Blockchain',
      demoLink:'https://www.youtube.com/watch?v=shFIcnR7dmU&t=66s'
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
