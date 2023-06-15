import { Pipe, PipeTransform } from "@angular/core";
import { TaskState } from "../models/task.models";

@Pipe({
  name: "filterTasksByState",
})
export class FilterTasksByStatePipe implements PipeTransform {
  transform(tasks: any[], state: TaskState): any[] {
    if (!tasks || !state) {
      return tasks;
    }

    return tasks.filter((task) => task.state === state);
  }
}
