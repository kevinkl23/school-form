import React, { useState } from 'react';

function StudentForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        address: '',
        classNumber: '',
        studentId: '',
        favoriteFood: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

  return (
    <>
        <form>
            <label for='firstName'>First Name </label><br></br>
            <input type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange}></input><br></br>
            <p>{formData.firstName}</p><br></br>

            <label for='lastName'>Last Name </label><br></br>
            <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange}></input><br></br>
            <p>{formData.lastName}</p><br></br>

            <label for='age'>Age </label><br></br>
            <input type='number' id='age' name='age' value={formData.age} onChange={handleChange}></input><br></br>
            <p>{formData.age}</p><br></br>

            <label for='address'>Address </label><br></br>
            <input type='text' id='address' name='address' value={formData.address} onChange={handleChange}></input><br></br>
            <p>{formData.address}</p><br></br>

            <label for='classNumber'>Class Number</label><br></br>
            <input type='text' id='classNumber' name='classNumber' value={formData.classNumber} onChange={handleChange}></input><br></br>
            <p>{formData.classNumber}</p><br></br>

            <label for='studentId'>Student ID</label><br></br>
            <input type='text' id='studentId' name='studentId' value={formData.studentId} onChange={handleChange}></input><br></br>
            <p>{formData.studentId}</p><br></br>

            <label for='title'>Favorite Food</label><br></br>
            <input type='radio' id='pizza' name='favoriteFood' value='Pizza' checked={formData.favoriteFood === 'Pizza'} onChange={handleChange}></input>
            <label for='pizza'>Pizza</label><br></br>

            <input type='radio' id='friedRice' name='favoriteFood' value='Fried Rice' checked={formData.favoriteFood === 'Fried Rice'} onChange={handleChange}></input>
            <label for='friedRice'>Fried Rice</label><br></br>

            <input type='radio' id='lasagna' name='favoriteFood' value='Lasagna' checked={formData.favoriteFood === 'Lasagna'} onChange={handleChange}></input>
            <label for='lasagna'>Lasagna</label><br></br>

            <p>{formData.favoriteFood}</p>
        </form>
    </>
  );
}

export default StudentForm;