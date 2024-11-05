import React from 'react';
import './CreateMate.css'
import { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import 'nice-forms.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateMate = () => {
    const [crewmate, setCrewmate] = useState({ name: '', speed: 0, color: '' });

    const navigate = useNavigate();

    const createCrewmate = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('Crewmates')
            .insert({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .select();
        if (error) {
            console.error(error);
        } else {
            console.log(data);
            alert('Crewmate created successfully!');

            navigate('/gallery');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrewmate({ ...crewmate, [name]: value });
    }


    return (
        <div>
            <h1>Create Crewmate</h1>
            <div className='container'>
            <form className='nice-form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={crewmate.name} onChange={handleChange} />
                <label htmlFor="speed">Speed:</label>
                <input type="number" name="speed" id="speed" value={crewmate.speed} onChange={handleChange} />
                <label htmlFor="color">Color:</label>
                <select name="color" id="color" value={crewmate.color} onChange={handleChange} >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                    <option value="black">Black</option>
                </select>
                <br />
                <br />
                <input className="btn btn-primary" type="submit" value="Create" onClick={createCrewmate} />
            </form>
            <img src="https://robohash.org/wtf" alt="Crewmate" style={{marginLeft: '20px'}} />
            </div>
        </div>
    );
}
export default CreateMate;