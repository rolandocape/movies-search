import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.css'],
})
export class MovieThumbComponent implements OnInit {
  @Input() movie: any;
  @Output() onSelect = new EventEmitter();

  ngOnInit() {
  }

  handleSelect() {
    this.onSelect.emit();
  }
}
