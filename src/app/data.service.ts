import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

// Now we use Redux (and therefore not the DataService anymore)
@Injectable()
export class DataService {

  private babies: Baby[] = [
    {
      firstname: 'Oliver', 
      postalCode: '2920', 
      picture: 'no picture yet', 
      age: 8,
      gender: "Male"
    },
    {
      firstname: 'Carla', 
      postalCode: '1324', 
      picture: 'no picture yet', 
      age: 24,
      gender: "Female"
    },
  ];

  private sitters: Sitter[] = [
    {
      ratings: [],
      firstname: 'Bob',
      lastname: 'Alisan',
      age: 16,
      yearsOfExperience: 0,
      region: 'Greater Copenhagen',
      picture: 'not yet',
      gender: 'Male',
      phone: '12345678'
    },
    {
      ratings: [],
      firstname: 'Christian',
      lastname: 'Kirschberg',
      age: 29,
      yearsOfExperience: 8,
      region: 'Greater Copenhagen',
      picture: 'not yet',
      gender: 'Male',
      phone: '87654321'
    },
  ];

  constructor() { }

  public addBaby(baby: Baby) {
    this.babies.push(baby);
    console.log(this.babies);
  }
  public getBabies(): Baby[] {
    return this.babies;
  }

}
