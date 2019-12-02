import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  setForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      area: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor( private toastr: ToastrService ) { }

  onSubmit() {
    console.warn(this.setForm.value);
    this.toastr.success('Form Submitted Successfully', 'Success');
  }
  // successmsg() { this.toastr.success('Toastr Success message', 'Success'); }
  errorsmsg() { this.toastr.error('Toastr Error Notification', 'Error'); }
  infotoastr() { this.toastr.info('Important News', 'Information'); }
  toastrwaring() { this.toastr.warning('Battery about to Die', 'Warning'); }
  ngOnInit() {  }

}
