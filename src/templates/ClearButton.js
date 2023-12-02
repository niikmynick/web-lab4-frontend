import React from 'react';
import { connect } from 'react-redux';
import { clearData } from '../utils/actions';

function ClearButton({ clearData, hasData }) {
    const handleClear = (event) => {
        event.preventDefault();
        clearData();
    };

    return (
        <div id="clearDiv" style={{ display: hasData ? 'block' : 'none' }}>
            <form id="clearResults" onClick={handleClear}>
                <input type="submit" value="Очистить историю" id="submit-button" />
            </form>
        </div>
    );
}


const mapStateToProps = (state) => ({
    hasData: state.data.length > 0,
});

const mapDispatchToProps = {
    clearData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearButton);