// Activity 4: Getters and Setters 


class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // TAsk 7: Add a getter method to the person class that return the full name name(assume a firstName and lastName property). Create an Instance and log the full name using the getter.
    // solution
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    // Task 8: Add a setter method to the person class to update the name properties(firstName, lastName). Update the name using the setter and log the update name.
    // solution

    set setFullName(fullName){
        const [firstName,lastName] = fullName.split(' ');
        this.firstName=firstName
        this.lastName = lastName;

        console.log(`Updated name: ${this.fullName}`);
    }
    set setFirstName(firstName){
        this.firstName=firstName
        console.log(`Updated name: ${this.fullName}`);
    }
    
    set setLastName(lastName){
        this.lastName = lastName
        console.log(`Updated name: ${this.fullName}`);
    }
}

const user = new Person("Amit","Verma")
console.log(user.fullName);

user.setFullName = "adi singh"

