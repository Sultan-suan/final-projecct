import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTableTC } from '../redux/table-reducer';

const Find = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const cardPacks = useSelector(state => state.tableReducer.cardPacks);

    useEffect(() => {
        // dispatch(getTableTC());
    }, [dispatch]);

    const handleInputChange = e => {
        setSearchTerm(e.target.value);
    };

    const filteredCardPacks = cardPacks.filter(pack => pack.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleInputChange} />
            <ul>
                {filteredCardPacks.map(pack => (
                    <li key={pack._id}>{pack.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Find;
