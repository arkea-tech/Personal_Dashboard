import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-delete-widget',
  templateUrl: './edit-delete-widget.component.html',
  styleUrls: ['./edit-delete-widget.component.scss']
})
export class EditDeleteWidgetComponent implements OnInit {

    @Input() editForm: any;
    editFormValue: string

    constructor() { }

    ngOnInit(): void {
    }

    setEditFormValue() {
        this.editFormValue = this.editForm;
        console.log(this.editFormValue);
    }

}
