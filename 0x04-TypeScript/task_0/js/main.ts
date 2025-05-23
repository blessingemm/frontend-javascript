interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Michael",
  age: 21,
  location: "Kogi State"
};

const student2: Student = {
  firstName: "Blessing",
  lastName: "Emmanuel",
  age: 23,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
