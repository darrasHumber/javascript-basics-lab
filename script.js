//Declare and use variables
// Demonstrate Datatype
console.log("Declare and use variables");
console.log("Demonstrate Datatype");
console.log("");
const studentName = "Mohammed Darras"; // string
const studentAge = 99; // Integer
const studentGpa = 2.79; //float-point
let isEnrolled = true; //boolean
const classes = ["JS", "Web Programming", "OS", "DB"];
const md = {
  studentName,
  studentAge,
  studentGpa,
  isEnrolled,
  classes,
}; //object

console.log("Student Name: ", studentName);
console.log("Student age", studentAge);
console.log("GPA", studentGpa);
console.log("Enrollment status:", isEnrolled ? "Enrolled" : "Not Enrolled");
console.log("Student Classes:", classes);
console.log("Mohammed Obj =", md);

console.log("====================================");
//Basic operations
//Arthmtic operations
console.log("Arthmtic operations");
console.log("");
console.log("7 + 3 =", 7 + 3); //106
console.log("73 - 22 =", 73 - 22); //51
console.log("92 * 3 =", 3 * 92); //276
console.log("720/8 =", 720 / 8); //90
console.log("====================================");

//Comparison operator

console.log("Comparison operator");
console.log("");
console.log("3 > 2", 3 > 2); // true
console.log("7 > 9", 7 > 9); //false
console.log("8 < 6", 8 < 6); //false
console.log("23 < 40", 23 < 40); //true
console.log("3 equals 3", 3 === 3); //true
console.log("7 equals 11 - 4", 7 === 11 - 4); //true
console.log("m equals M", "m" === "M"); //true
console.log("Mohammed NOT equal mohammed", "Mohammed" !== "mohammed"); //true
console.log("3 NOT equal 4", 3 !== 4); //true
console.log("====================================");

//Logical Operator
console.log("Logical Operator");
console.log("");
console.log("True and True", true && true);
console.log("False and True", false && true);
console.log("False or True", false || true);
console.log("False or False", false || false);
console.log("Not true", !true);
console.log("Not false", !false);
console.log("Not NOT false", !!false);
const hasLicinece = true;
console.log("studentAge > 30 and hasLicence", studentAge > 30 && hasLicinece);
const dropCollege = false;
console.log("GPA < 2 or drop College", studentGpa < 2 || dropCollege);
console.log(
  "Mohammed decided to drop all classes so we change value of isEnrolled"
);
isEnrolled = !isEnrolled;
console.log("Updated value of isEnrolled", isEnrolled);
