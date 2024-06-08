// src/FormComponent.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });

    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const history = useHistory();

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = formData.firstName ? '' : 'First Name is required';
        tempErrors.lastName = formData.lastName ? '' : 'Last Name is required';
        tempErrors.username = formData.username ? '' : 'Username is required';
        tempErrors.email = formData.email ? '' : 'Email is required';
        tempErrors.password = formData.password ? '' : 'Password is required';
        tempErrors.phoneNo = formData.phoneNo ? '' : 'Phone Number is required';
        tempErrors.country = formData.country ? '' : 'Country is required';
        tempErrors.city = formData.city ? '' : 'City is required';
        tempErrors.panNo = formData.panNo ? '' : 'Pan Number is required';
        tempErrors.aadharNo = formData.aadharNo ? '' : 'Aadhar Number is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            history.push('/details', { formData });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <div className="error">{errors.username}</div>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? 'Hide' : 'Show'}
                </button>
                {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                {errors.phoneNo && <div className="error">{errors.phoneNo}</div>}
            </div>
            <div>
                <label>Country</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                </select>
                {errors.country && <div className="error">{errors.country}</div>}
            </div>
            <div>
                <label>City</label>
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    {formData.country === 'India' && (
                        <>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </>
                    )}
                    {formData.country === 'USA' && (
                        <>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                        </>
                    )}
                </select>
                {errors.city && <div className="error">{errors.city}</div>}
            </div>
            <div>
                <label>Pan Number</label>
                <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
                {errors.panNo && <div className="error">{errors.panNo}</div>}
            </div>
            <div>
                <label>Aadhar Number</label>
                <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}
            </div>
            <button type="submit" disabled={!validate()}>
                Submit
            </button>
        </form>
    );
};

export default FormComponent;
