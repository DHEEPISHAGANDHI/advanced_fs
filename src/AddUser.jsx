import React, { useState } from 'react'

const AddUsers = () => {
    const [userDetails, setUserDetails] = useState({ 
        name: "",
        email: "",
        gender: "",
        phoneNo: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
        // Submit to backend here
    };

    return (
        <div>
            <h2>Add Users Details</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">Name:</label> 
                    <input type="text" id="name" name="name" value={userDetails.name} onChange={handleChange} required/><br/><br/>
                    <label htmlFor="email">Email:</label> 
                    <input type="email" id="email" name="email" value={userDetails.email} onChange={handleChange} required/><br/><br/>
                    <label>Gender:</label>
                    <input type="radio" id="male" name="gender" value="male" checked={userDetails.gender === "male"} onChange={handleChange} required/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" checked={userDetails.gender === "female"} onChange={handleChange} required/>
                    <label htmlFor="female">Female</label><br/><br/>
                    <label htmlFor="phoneNo">Phone No:</label>
                    <input type="tel" id="phoneNo" placeholder="+91" name="phoneNo" value={userDetails.phoneNo} onChange={handleChange} required/><br/><br/>
                    <label htmlFor="city">City:</label>
                    <select name="city" id="city" value={userDetails.city} onChange={handleChange} required>
                        <option value="">Select City</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                    </select><br/><br/>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
export default AddUsers;


// import React, { useState } from 'react'


// const AddUsers = () => {
//     const [userDetails, setUserDetails] = useState({
//         name: "",
//         email: "",
//         gender: "",
//         phoneNo: "",
//         city: "",
//     });
//     return (
//         <div>
//             <h2>Add Users Details</h2>
//             <form action="">
//                 <fieldset>
//                     <label htmlFor="">Name:</label>
//                     <input type="text" id="name" name="name" required onChange={(e) => setUserDetails({ 
//                         ...userDetails, name: e.target.value })} /><br /><br />
//                     <label htmlFor="">Email:</label>
//                     <input type="email" id="email" name="email" required onChange={(e) => setUserDetails({
//                         ...userDetails, email: e.target.value })} /><br /><br />
//                     <label htmlFor="">Gender:</label>
//                     <input type="radio" id="male" name="gender" value="male" required />Male
//                     <input type="radio" id="female" name="gender" value="female" required />Female<br /><br />
//                     <label htmlFor="">Phone No:</label>
//                     <input type="tel" id="phoneNo" placeholder="+91" name="phoneNo" required /><br /><br />
//                     <label htmlFor="">City:</label>
//                     <select name="city" id="city" required>
//                         <option value="select city">Select City</option>
//                         <option value="bangalore">Bangalore</option>
//                         <option value="chennai">Chennai</option>
//                         <option value="hyderabad">Hyderabad</option>
//                         <option value="mumbai">Mumbai</option>
//                         <option value="delhi">Delhi</option>
//                     </select><br /><br />
//                     <div className="row my-4">
//                         <button className="btn btn-primary">
//                             <strong>Submit</strong>
//                         </button>
//                         <button type="reset" className="btn btn-warning">
//                             <strong>Reset</strong>
//                         </button>
//                     </div>
//                 </fieldset>
//             </form>
//         </div>
//     )
// }
// export default AddUsers;