import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Functionality } from "../models/functionality.models";

@Injectable({
  providedIn: "root",
})
export class FunctionalityService {
  private _functionalities: BehaviorSubject<Functionality[]> = new BehaviorSubject<Functionality[]>([]);
  
  constructor() {
    const cachedFunctionalities = localStorage.getItem("functionalities");
    if (cachedFunctionalities) {
      this._functionalities.next(JSON.parse(cachedFunctionalities));
    }
  }

  getFunctionalities(): Observable<Functionality[]> {
    return this._functionalities.asObservable();
  }

  createFunctionality(functionality: Functionality) {
    const functionalities = this._functionalities.value;
    functionality.id = functionalities.length + 1;
    functionalities.push(functionality);
    this._functionalities.next(functionalities);
    this.updateCache();
  }

  updateFunctionality(functionality: Functionality) {
    const functionalities = this._functionalities.value;
    const index = functionalities.findIndex((f) => f.id === functionality.id);
    if (index !== -1) {
      functionalities[index] = functionality;
      this._functionalities.next(functionalities);
      this.updateCache();
    }
  }

  deleteFunctionality(functionality: Functionality) {
    const functionalities = this._functionalities.value;
    const index = functionalities.findIndex((f) => f.id === functionality.id);
    if (index !== -1) {
      functionalities.splice(index, 1);
      this._functionalities.next(functionalities);
      this.updateCache();
    }
  }

  private updateCache() {
    localStorage.setItem("functionalities", JSON.stringify(this._functionalities.value));
  }
}
