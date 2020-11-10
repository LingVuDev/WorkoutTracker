import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-excercise-dialog',
  templateUrl: './add-excercise-dialog.component.html',
  styleUrls: ['./add-excercise-dialog.component.scss'],
})
export class AddExcerciseDialogComponent implements OnInit {
  exercise: Exercise = { name: '', tags: [] };
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<AddExcerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.exercise.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.exercise.tags.indexOf(tag);

    if (index >= 0) {
      this.exercise.tags.splice(index, 1);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
