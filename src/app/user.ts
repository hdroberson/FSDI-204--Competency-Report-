export class User {
  
    constructor(
        // class attributes
        // using public/private converts the param into class attribute
        // using the ? makes the param optional
        public userName? : string,
        public email? : string, 
        public password? : string, 
        public firstName? : string, 
        public lastName?: string
    ) {}
    
    // class methods

    sayHello() {
        console.log('Hello my name is: ' + this.firstName + ' ' + this.lastName);
    }

}
