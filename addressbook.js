function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

//Creating prototypes allow to not waste space in memory by creating the function only once.
Person.prototype.addEmail = function addEmail(emailAddress, type) {
    this.emails.push(new Email(emailAddress, type));
}

function Email(address, type) {
    this.address = address;
    
    if (type === "work") {
        this.type = "work";
    }
    else if (type === "home") {
        this.type = "home";
    }
    else {
        this.type = "other";
    }
    
}

var person = new Person("Takanari", "Sasaki");
person.addEmail("takanari.s@hotmail.com", "home");
console.log(person);