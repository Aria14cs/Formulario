import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'my-store';
  
  name = "Nicolas";
  age = 18;
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Irish_clover.jpg/180px-Irish_clover.jpg";
  btnDisabled = true;
  person = {
    name: "Nicolas",
    age: 18,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Irish_clover.jpg/180px-Irish_clover.jpg",
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
  }
}

