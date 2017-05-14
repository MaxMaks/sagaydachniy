import { Component, OnInit } from '@angular/core';
import { GetValuesService } from '../get-values.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public qwe:GetValuesService) { }

  ngOnInit() {
  }

}
