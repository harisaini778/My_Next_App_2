

import Link from 'next/link';

const DeveloperList = () => {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ];

    return (
        <div>
            <h1>Developer List</h1>
            <ul>
                {details.map((developer) => (
                    <li key={developer.id}>
                        <Link href={`/studentList/aboutus/developers/${developer.id}`}>
                            {developer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeveloperList;
