import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = 0;
  memory = 0;
  state = 'number';
  operator: string;

  clickNumber(n: number) {
    switch (this.state) {
      case 'number':
        this.display = this.display * 10 + n;
        break;
      case 'operator':
        this.display = n;
        this.state = 'number';
        break;
      case 'result':
        this.memory = 0;
        this.display = n;
        this.state = 'number';
    }
  }

  clickOperator(o: string) {
    this.operator = o;
    this.calculate();
    this.memory = this.display;
    this.state = 'operator';
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.display = eval('' + this.memory + this.operator + this.display);
    this.memory = 0;
    this.state = 'result';
  }

  resetLastNumber() {
    this.display = 0;
    this.state = 'number';
  }

  reset() {
    this.display = 0;
    this.memory = 0;
    this.state = 'number';
  }
}
