import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
// import './Info.css';
import { Link } from 'react-router-dom';

const Info = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ name: '', speed: 0, color: '' });

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select()
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
    if (!crewmate) {
        return <div>Loading...</div>;
    }

    const getSpeedText = (speed) => {
        if (speed > 100) {
            return 'This crewmate is super fast!';
        } else if (speed > 50) {
            return 'This crewmate is quite fast.';
        } else {
            return 'This crewmate has a moderate speed.';
        }
    };
    return (
        <div className="info-container">
            <h1>Crewmate Information</h1>
            <div className="crewmate-card">
                <img
                    src={`https://robohash.org/${crewmate.id}${crewmate.name}${crewmate.speed}${crewmate.color}`}
                    alt="Crewmate"
                    className="crewmate-image"
                />
                <div className="crewmate-details">
                    <h2>{crewmate.name}</h2>
                    <p><strong>Speed:</strong> {crewmate.speed}</p>
                    <p><strong>Color:</strong> {crewmate.color}</p>
                    <p><strong>ID:</strong> {crewmate.id}</p>
                    <p><strong>Created At:</strong> {crewmate.created_at}</p>
                    <p>{getSpeedText(crewmate.speed)}</p>
                    <button className='class="btn btn-info"'><Link to={`/edit/${crewmate.id}`}> Edit Crewmate</Link></button>
                </div>
            </div>


        </div>
    );
};

export default Info;