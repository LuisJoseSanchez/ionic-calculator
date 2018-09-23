import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = '0';
  memory = 0;
  state = 'number';
  operator: string;

  clickNumber(n: number) {
    switch (this.state) {
      case 'number':
        this.display = (+this.display * 10 + n).toString();
        break;
      case 'operator':
        this.display = n.toString();
        this.state = 'number';
        break;
      case 'result':
        this.display = n.toString();
        this.state = 'number';
    }
  }

  clickOperator(o: string) {
    this.state = 'operator';
    this.operator = o;
    this.memory = +this.display;
    this.display = o;
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.display = eval(this.memory + this.operator + this.display).toString();
    this.state = 'result';
  }
}
