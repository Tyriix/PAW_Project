import { Component, OnInit } from "@angular/core";
import { FunctionalityService } from "../shared/functionality.service";
import { Functionality } from "../models/functionality.models";

@Component({
  selector: "app-functionality",
  templateUrl: "./functionality.component.html",
  styleUrls: ["./functionality.component.scss"],
})
export class FunctionalityComponent implements OnInit {
  functionalities: Functionality[] = [];
  newFunctionalityName: string = "";
  updatedFunctionalityName: string = "";

  constructor(private functionalityService: FunctionalityService) {}

  ngOnInit() {
    this.functionalityService.getFunctionalities().subscribe((functionalities) => {
      this.functionalities = functionalities;
    });
  }

  createFunctionality() {
    const newFunctionality: Functionality = {
      id: 0,
      name: this.newFunctionalityName,
      tasks: [],
    };
    this.functionalityService.createFunctionality(newFunctionality);
    this.newFunctionalityName = "";
  }
  updateFunctionalityName(functionality: Functionality, newName: string) {
    functionality.name = newName;
  }

  updateFunctionality(functionality: Functionality) {
    this.functionalityService.updateFunctionality(functionality);
  }

  deleteFunctionality(functionality: Functionality) {
    this.functionalityService.deleteFunctionality(functionality);
  }
}
