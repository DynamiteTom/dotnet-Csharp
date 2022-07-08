import { Component, OnInit } from '@angular/core';

const arr_op_list= `     
       'concat', 'copyWithin', 'entries', 'every', 'fill','filter', 'find', 'findIndex', 'flat', 'flatMap',  
      'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'length','map','pop', 'push', 'reduce', 'reduceRight', 
       'reverse', 'shift', 'slice', 'some','sort','splice','toLocalString', 'toString','unshift', 'values'
`;

const arr_def_list= `     
       'combind 2 arrays to form a 3rd', 
       'copies els to 1st index 1st to < end', 
       'index of each el', 
       'only true if all members pass', 
       'fills all members with a value or start - end',
       'creates a new array with els matching condition', 
       'returns 1st el matching ftn condition', 
       'returns index of 1st el matching condition', 
       'creates a 1-D array from multi-D array', 
       'combines map() then flat()',  
      'returns true if value in array', 
      '1st index matching', 
      'returns arr as string', 
      'returns arr iterator with index', 
      'last index matching', 
      'length of the array',
      'creates new arr with ftn on each el',
      'removes value from top of array', 
      'adds value to end of array', 
      'op working on all members to return one value', 
      'reduce but from R to L', 
       'reverses members of array', 
       'remove 1st el of array', 
       'selected els of array', 
       'true if any pass',
       'sorts array in order',
       'index - num - [added els]',
       'els are converted to strings', 
       'returns string of els',
       'adds new els to start of array',
       'returns the els of array'
`;


@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {
  numbers = [4,6,10];
  
  stringVal = 'Hello world';
  arr_ops = arr_op_list.split(',');  
  arr_defs = arr_def_list.split(',');
  constructor() { }

  ngOnInit(): void {
    this.arrEx1();
    let strng = 'Hello world';
    
  }

  removeQuote(str: string): string{
      return str.replace(/'/g,'');
  }

  arrEx1(){
    
      this.numbers.push(20);

   //   this.numbers.find

  }
}
