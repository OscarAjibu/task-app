import { Component, OnInit, } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [NgFor, TaskItemComponent]
})
export class TasksComponent implements OnInit{
  tasks: Task[] = TASKS;

  constructor(){}

  ngOnInit(): void {}
}
