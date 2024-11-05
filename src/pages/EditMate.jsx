import React, { useEffect } from 'react';
import { useState } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMate.css';
import 'nice-forms.css';
// import { Tab } from 'bootstrap';

const EditMate = () => {

    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ name: '', speed: 0, color: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('')
                .eq('id', id)
                .single();
            if (error) {
                console.error(error);
            } else {
                setCrewmate(data);
            }

        };
        fetchCrewmate();
    }, [id]);

    const updateCrewmate = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('Crewmates')
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })
            .eq('id', id);
        if (error) {
            console.error(error);
        } else {
            console.log(data);
            alert('Crewmate updated successfully!');

            navigate('/gallery');
        }
    }

    const deleteCrewmate = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id);
        if (error) {
            console.error(error);
        } else {
            console.log(data);
            alert('Crewmate deleted successfully!');

            navigate('/gallery');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrewmate({ ...crewmate, [name]: value });
    }

    return (
        <>
            <h1>Edit Crewmate</h1>
            <div className='container'>
                <div>
            <h4>Your crewmate: {crewmate.name}, {crewmate.speed}, {crewmate.color} </h4>
            <img src={`https://robohash.org/${crewmate.id}${crewmate.name}${crewmate.speed}${crewmate.color}`} alt="Crewmate" style={{margin:'20px'}}/>            
            </div>
            <form className='nice-form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={crewmate.name} onChange={handleChange} required />
                <label htmlFor="speed">Speed:</label>
                <input type="number" name="speed" id="speed" value={crewmate.speed} onChange={handleChange} required />
                <label htmlFor="color">Color:</label>
                <select name="color" id="color" value={crewmate.color} onChange={handleChange} required>
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
                <input className="btn btn-primary"  type="submit" value="update" onClick={updateCrewmate} />
                <input className="btn btn-outline-danger"  type="submit" value="delete" onClick={deleteCrewmate} />
            </form>
            </div>
        </>
    );
};
export default EditMate;