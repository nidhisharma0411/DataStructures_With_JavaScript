export class  Student{
     name: String;
     class: String;
     section: String;
     rollNumber: String;
}


export class Component1{
     student: Student;
     constructor(){
          this.student = new Student();
     }
}

