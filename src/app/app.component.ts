import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  input: string = '0';
  result: string = '';

  //extra code
  currval = '';
  pressNum(value: string){
    this.currval = this.currval + value;
    this.input = this.currval;
    
  }

  clear(){

  }
  clearAll(){
    this.currval ='';
    this.input = '0';
  }
  getAnswer(){
    this.input = eval(this.currval);
    this.currval = this.result;
  }


  //extra code ends here
  // pressNum(num:string){
  //   if(num== "."){
  //     if(this.input != ""){
  //       const lastNum = this.getLastOperand()
  //       console.log(lastNum.lastIndexOf("."))
  //       if(lastNum.lastIndexOf(".") >=0) return;
  //     }
  //   }

//     if(num == "0"){
//       if(this.input == ""){
//         return;
//       }
//       const PrevKey = this.input[this.input.length-1];
//       if(PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+'){
//         return;
//       }
//     }
//     this.input = this.input + num;
//     this.calcAnswer();
//   }
//   getLastOperand(){
//     let pos :number;
//     console.log(this.input);
//     pos = this.input.toString().lastIndexOf("+");
//     if(this.input.toString().lastIndexOf("-") > pos) pos = this.input.toString().lastIndexOf("-");
//     if(this.input.toString().lastIndexOf("*") > pos) pos = this.input.toString().lastIndexOf("*");
//     if(this.input.toString().lastIndexOf("/") > pos) pos = this.input.toString().lastIndexOf("/");
//     console.log('Last' +this.input.substring(pos + 1));
//     return this.input.substring(pos + 1)
//   }
  
//   pressOperator(){
//     const LastKey = this.input[this.input.length-1];
//     if(LastKey === '/' || LastKey === '*' || LastKey === '-' || LastKey  === '+'){
//       return;
//     }
//   }

//   clear(){
//     if(this.input != ""){
//       this.input = this.input.substring(0,  -1);
//     }
//   }
//   clearAll(){
//     this.result = '';
//     this.input = '';
//   }
  
//   calcAnswer(){
//     let formula = this.input;
//     let LastKey = formula[formula.length-1];

//     if(LastKey === '.') {
//       formula = formula.substring(0, formula.length-1);
//     }
//     LastKey = formula[formula.length-1];

//     if (LastKey === '/' || LastKey === '*' || LastKey === '-' || LastKey === '+' || LastKey === '.') {
//       formula = formula.substring(0, formula.length - 1);
//     }
//     console.log("Formula" + formula);
//     this.result= eval(formula)
//   }

//   getAnswer(){
//   // //   this.calcAnswer();
//   // //   this.input = this.result;
//   // //   if(this.input=="0") this.input ="";
//    }
}
