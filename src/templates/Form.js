import React from 'react';
import { connect } from 'react-redux';
import { sendData } from '../utils/actions';

function Form({ sendData, sendingData, sendDataError }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const x = document.getElementById("x-value").value;
        const y = document.getElementById("y-value").value;
        const r = document.getElementById("r-value").value;
        sendData(x, y, r);
    };

    return (
        <div className="form-div">
            <form id="user-input" onSubmit={handleSubmit}>
                <label htmlFor="x-value">X: </label>
                <input type="text" id="x-value" name="x-value" />

                <label htmlFor="y-value">Y: </label>
                <input type="text" id="y-value" name="y-value" />

                <label htmlFor="r-value">R: </label>
                <input type="text" id="r-value" name="r-value" />

                <input type="submit" value="Submit" id="submit-button" />
            </form>

            {sendingData && <p>Sending data...</p>}
            {sendDataError && <p>Error: {sendDataError}</p>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    sendingData: state.sendingData,
    sendDataError: state.sendDataError,
});

const mapDispatchToProps = {
    sendData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
