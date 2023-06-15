import { Component, OnInit } from "@angular/core";
import { FunctionalityService } from "../shared/functionality.service";
import { Functionality } from "../models/functionality.models";
import { Task, TaskState } from "../models/task.models";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  functionalities: Functionality[] = [];
  selectedFunctionality: Functionality | null = null;
  newTaskName: string = "";
  TaskState = TaskState;

  private draggedTask: Task | null = null;
  private targetCard: HTMLElement | null = null;

  constructor(private functionalityService: FunctionalityService) {}

  ngOnInit() {
    this.functionalityService.getFunctionalities().subscribe((functionalities) => {
      this.functionalities = functionalities;
    });
  }

  createTask() {
    if (this.selectedFunctionality && this.selectedFunctionality.tasks) {
      const newTask: Task = {
        id: this.selectedFunctionality.tasks.length + 1,
        title: this.newTaskName,
        state: TaskState.ToDo,
        editing: false,
      };
      this.selectedFunctionality.tasks.push(newTask);
      this.functionalityService.updateFunctionality(this.selectedFunctionality);
      this.newTaskName = "";
    }
  }

  deleteTask(task: Task) {
    if (this.selectedFunctionality && this.selectedFunctionality.tasks) {
      const index = this.selectedFunctionality.tasks.indexOf(task);
      if (index !== -1) {
        this.selectedFunctionality.tasks.splice(index, 1);
        this.functionalityService.updateFunctionality(this.selectedFunctionality);
      }
    }
  }

  editTask(task: Task) {
    task.editing = true;
  }

  saveTask(task: Task) {
    if (task.editing) {
      task.editing = false;
      if (this.selectedFunctionality) {
        this.functionalityService.updateFunctionality(this.selectedFunctionality);
      }
    }
  }
   onDragStart(event: DragEvent, task: Task) {
    this.draggedTask = task;
  }

  onDragEnd(event: DragEvent) {
    this.draggedTask = null;
    this.targetCard = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragEnter(event: DragEvent, card: HTMLElement) {
    event.preventDefault();
    this.targetCard = card;
  }

  onDragLeave(event: DragEvent) {
    this.targetCard = null;
  }
  onDrop(event: DragEvent, newState: TaskState) {
    event.preventDefault();
    if (this.draggedTask && this.selectedFunctionality && this.selectedFunctionality.tasks) {
      const taskIndex = this.selectedFunctionality.tasks.findIndex(t => t.id === this.draggedTask?.id);
      if (taskIndex !== -1) {
        this.selectedFunctionality.tasks[taskIndex].state = newState;
        this.functionalityService.updateFunctionality(this.selectedFunctionality);
      }
    }
  }

  onTaskDragEnd(event: DragEvent, state: TaskState) {
    const taskId = event.dataTransfer?.getData("text/plain");
    if (taskId && this.selectedFunctionality && this.selectedFunctionality.tasks) {
      const task = this.selectedFunctionality.tasks.find((t) => t.id === parseInt(taskId));
      if (task) {
        task.state = state;
        this.functionalityService.updateFunctionality(this.selectedFunctionality);
      }
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }
}
