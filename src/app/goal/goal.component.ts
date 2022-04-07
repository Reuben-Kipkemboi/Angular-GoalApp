import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals: Goal[] = [
    new Goal(1, 'Attend morning stand-ups', 'Wake up and prepare for morning stand ups',new Date(2022,4,6)),
    new Goal(2,'Cover days content','Cover the days content and ask for assistance',new Date(2022,4,7)),
    new Goal(3,'Attend Evening Checkouts','Every evening attend the Checkouts on time',new Date(2022,4,8)),
    new Goal(4,'Work on Ips during the weekend','Work on good and quality IPs',new Date(2022,4,9)),
    new Goal(5,'Attend the Fridays feedbacks ','Give both positive and Negative feedbacks',new Date(2022,4,10)),
    new Goal(6,'Relax','Find time to relax on sundays to reenergize for a new week',new Date(2022,4,11)),

    
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  // completeGoal(isComplete, index){
  //   if (isComplete) {
  //     this.goals.splice(index,1);
  //   }
  // }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
