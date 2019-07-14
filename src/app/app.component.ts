import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'form-array';

  firstName = new FormControl('');
  lastName = new FormControl('');
  bankAccountsFormArray = new FormArray([]);

  profileForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    bankAccounts: this.bankAccountsFormArray
  });

  bankAccounts = [];

  ngOnInit(): void {
    this.addBankAccount(1);
  }

  addBankAccount(label) {
    // create formControls to add to formGroup and bankAccounts array
    const nameControl = new FormControl('');
    const numberControl = new FormControl('');

    // create formGroup to add to FormArray
    const group = new FormGroup({
      name: nameControl,
      number: numberControl
    });

    this.bankAccountsFormArray.push(group);


    // add formfields to visual representation of this formGroup
    let bankAccount = {
      label: 'bank account ' + label,
      fields: [{
        label: 'name',
        control: nameControl
      }, {
        label: 'account number',
        control: numberControl
      }]
    };

    this.bankAccounts.push(bankAccount);
  }

  addRow() {
    this.addBankAccount(this.bankAccounts.length + 1);
  }


  submit() {
    console.log('handle values', this.profileForm.value);
  }
}
