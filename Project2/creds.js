

//accordion function that is in jquery.
$("#accordion").accordion(); 


//Course Constructor
var courses = [
    {
        //Course 1
        subject: "SCIS",
        courseNumber:  "472: ",
        courseTitle: "Software Engineering"
    },
    {
        //course 2
        subject: "HCIS",
        courseNumber:  "330: ",
        courseTitle: "Web Developement"
    },
    {
        //course 3
        subject: "SCIS",
        courseNumber:  "302: ",
        courseTitle: "Design-Management of Information Systems"
    }
];
// using the for loop to fill in the table for the Courses Taken
var cT = '<tbody>'
for(i = 0;i < courses.length; i++){
    cT+= '<tr>';
    cT+= '<td>' + courses[i].subject + '</td>' + '<br>';
    cT+= '<td>' + courses[i].courseNumber + '</td>';
    cT+= '<td>' + courses[i].courseTitle + '</td>';
    cT+= '</tr>';
}
cT+='</tbody>';
document.getElementById('tableData').innerHTML = cT;



 