"use client"

const Student = ({params}) => {

    console.log(params);

    return (
        <div>
        <h1>Student Details</h1>
            <h1>{ params.student}</h1>
        </div>
    )
}
export default Student;