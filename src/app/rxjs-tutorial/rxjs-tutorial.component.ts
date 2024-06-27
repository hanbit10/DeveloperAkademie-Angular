import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, interval, throttleTime } from 'rxjs';

@Component({
  selector: 'app-rxjs-tutorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-tutorial.component.html',
  styleUrl: './rxjs-tutorial.component.scss',
})
export class RxjsTutorialComponent implements OnInit {
  timer = new BehaviorSubject<number>(0);
  ngOnInit(): void {
    //es wird jede 2 Sekunden aufgerufen
    this.timer.pipe(throttleTime(2000)).subscribe((value) => {
      console.log(value);
    });

    setInterval(() => {
      this.timer.next(this.timer.value + 1);
    }, 1000);
  }
}
