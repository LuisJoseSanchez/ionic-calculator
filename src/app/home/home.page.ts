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
  operator = '+';
  decimal = false;

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
    console.log('clickOperator inicio');
    this.calculate();
    this.operator = o;
    this.memory = this.display;
    this.state = 'operator';
    console.log('clickOperator fin');
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    console.log('calculate inicio');
    // console.log('' + this.memory + this.operator + this.display);
    this.display = eval('' + this.memory + this.operator + '(' + this.display + ')');
    this.memory = 0;
    this.state = 'result';
    console.log('calculate inicio');
  }

  resetLastNumber() {
    this.display = 0;
    this.state = 'number';
    this.decimal = false;
  }

  reset() {
    this.display = 0;
    this.memory = 0;
    this.state = 'number';
    this.operator = '+';
    this.decimal = false;
  }

  changeSign() {
    this.display = this.display * -1;
  }
}
