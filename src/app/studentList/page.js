
import Link from "next/link";

const StudentList = () => {

    return (
        <div>
            <h1>
                Student List
            </h1>

            <ul>
                <li>
                    <Link href="studentList/1">
                    Kamal
                    </Link>
                </li>
                 <li>
                    <Link href="studentList/2">
                    Hari
                    </Link>
                </li>
                 <li>
                    <Link href="studentList/3">
                    Khushi
                    </Link>
                </li>
                 <li>
                    <Link href="studentList/4">
                    Sunita
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default StudentList;