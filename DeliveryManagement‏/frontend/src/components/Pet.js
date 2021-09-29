import React, { useState } from 'react';
export default function Pet(props) {
    const [id, setId] = useState(props.id);
    const [name, setName] = useState(props.name);
    const [species, setSpecies] = useState(props.species);
    return (
        <div>
            <h2 >name:{name}</h2>
            <h2 >species:{species}</h2>
        </div>
    );
}