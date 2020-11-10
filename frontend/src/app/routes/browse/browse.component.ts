import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExcerciseDialogComponent } from '@app/dialogs/add-excercise-dialog/add-excercise-dialog.component';
import { EXERCISES } from './../../dummy-data';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  exercises: Exercise[] = EXERCISES;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddExerciseDialog(): void {
    this.dialog.open(AddExcerciseDialogComponent);
  }

  sortExercises(): { [letter: string]: Exercise[] } {
    const sortedExercises: { [letter: string]: Exercise[] } = {};

    this.exercises.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }).forEach((exercise) => {
      const firstLetter = exercise.name[0].toUpperCase();

      if (!sortedExercises[firstLetter]) {
        sortedExercises[firstLetter] = [];
      }

      sortedExercises[firstLetter] = [
        ...sortedExercises[firstLetter],
        exercise,
      ];
    });

    return sortedExercises;
  }
}
