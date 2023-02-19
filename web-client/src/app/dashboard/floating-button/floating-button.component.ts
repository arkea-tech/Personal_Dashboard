import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {

    @Input() setErrorWidget: (error: string) => void;
    @Input() setLoadingWidget: (isLoading: boolean) => void;
    @Input() setSuccessfulMessageWidget: (message: string) => void;

    constructor() { }

    ngOnInit(): void {
    }

}
