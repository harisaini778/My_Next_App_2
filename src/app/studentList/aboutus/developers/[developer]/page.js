 "use client"

// const Developer = ({params}) => {

//     console.log(params);

//     return (
//         <div>
//         <h1>Developer Details</h1>
//             <h1>{ params.developer}</h1>
//         </div>
//     )
// }
// export default Developer;
// Developer.js
const Developer = ({ params }) => {
    const developerDetails = {
        1: { name: 'Yash', role: 'Senior Developer', bio: 'Experienced in building robust applications.' },
        2: { name: 'Vaibhav', role: 'Backend Developer', bio: 'Specialized in designing efficient backend systems.' },
        3: { name: 'Suresh', role: 'Frontend Developer', bio: 'Passionate about creating intuitive user interfaces.' }
    };

    const developer = developerDetails[params.developer];

    return (
        <div>
            <h1>Developer Details</h1>
            {developer && (
                <div>
                    <h2>Name: {developer.name}</h2>
                    <p>Role: {developer.role}</p>
                    <p>Bio: {developer.bio}</p>
                </div>
            )}
        </div>
    );
};

export default Developer;
