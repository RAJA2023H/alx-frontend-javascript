interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
    }

const student1: Student = {
    firstName: "rajae",
    lastName: "Hem",
    age: 27,
    location: "Florida"
};

const student2: Student = {
    firstName: "wafae",
    lastName: "Hemm",
    age: 22,
    location: "Morocco"
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
	const tableBody = document.querySelector("#studentsTable tbody");

	studentsList.forEach(student => {
	const row = document.createElement("tr");

	const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
	row.appendChild(firstNameCell);

	const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
	row.appendChild(locationCell);

	tableBody.appendChild(row);
    });
}
renderTable();





