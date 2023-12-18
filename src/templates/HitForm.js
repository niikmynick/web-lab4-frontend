import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from '../utils/dataSlice';
import {drawNewPoint, drawPreview, reDrawPoints} from '../script/drawer';
import { validate } from '../script/validator';

function HitForm() {
    const dispatch = useDispatch();
    const { data, sendingData, sendDataError } = useSelector((state) => state.data);

    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [r, setR] = useState('');

    useEffect(() => {
        reDrawPoints(data, r)
        drawPreview(x, y, r);
    }, [data, x, y, r]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate(x, y, r)) {
            dispatch(sendData({x, y, r}));
            drawNewPoint(x, y, r);
        }
    };

    return (
        <div className="form-div">
            <form id="user-input" onSubmit={handleSubmit}>
                <label htmlFor="x-value">X: </label>
                <input
                    type="text"
                    id="x-value"
                    name="x-value"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                />

                <label htmlFor="y-value">Y: </label>
                <input
                    type="text"
                    id="y-value"
                    name="y-value"
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                />

                <label htmlFor="r-value">R: </label>
                <input
                    type="text"
                    id="r-value"
                    name="r-value"
                    value={r}
                    onChange={(e) => setR(e.target.value)}
                />

                <input type="submit" value="Submit" id="submit-button" />
            </form>

            {sendingData && <p>Sending data...</p>}
            {sendDataError && <p>Error: {sendDataError}</p>}
        </div>
    );
}

export default HitForm;
