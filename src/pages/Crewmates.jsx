import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import './Crewmates.css';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Crewmates = (props) => {
    
        const [crewmates, setCrewmates] = useState([]);
    
        useEffect(() => {
            const fetchCrewmates = async () => {
                const { data, error } = await supabase
                    .from('Crewmates')
                    .select('')
                    .order('created_at', { ascending: true });
                if (error) {
                    console.error(error);
                } else {
                    setCrewmates(data);
                }
            }
            fetchCrewmates();
        }, [props]);
    
        return(
            <>
                <h1>Crewmates</h1>
                <div className='container-b'>
                    { crewmates && crewmates.length > 0 ?
                    crewmates.map((crewmate, index) => (
                        <Link to={`/info/${crewmate.id}`}>
                        <Card key={crewmate.id} id={crewmate.id} name={crewmate.name} speed={crewmate.speed} color={crewmate.color}  />
                    </Link>

                    )): <h2>No crewmates found</h2>}
                </div>
            </>
        )
    }
    export default Crewmates;