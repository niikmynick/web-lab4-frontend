import React from 'react';
import { useDispatch } from 'react-redux';
import { sendData } from '../utils/dataSlice';
import { drawNewPoint } from '../script/drawer';

function Graph() {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        let r = document.getElementById('r-value').value;
        if (r === '') {
            return;
        }
        r = parseFloat(r);
        const x = (event.clientX - 240) / (100 / r);
        const y = (event.clientY - 305) / (-100 / r);

        dispatch(sendData({x, y, r}));
        drawNewPoint(x, y, r);
    };

    return (
        <div className="graph-div" id="graph-svg">
            <svg id='graphSVG' width='400' height='400' onClick={handleClick}>
                <polygon className='figure' points='200,200 300,200 200,100' fill='#ADD8E6' />

                <rect className='figure' x='200' y='200' width='100' height='100' fill='#ADD8E6' />

                <circle className='figure' cx='200' cy='200' r='100' fill='#ADD8E6' mask='url(#mask)' />
                <mask id='mask'>
                    <rect x='100' y='0' width='100' height='200' fill='#FFFFFF' />
                </mask>

                <line x1='50' y1='200' x2='350' y2='200' stroke='#000000' strokeWidth='2px' />

                <line x1='200' y1='50' x2='200' y2='350' stroke='#000000' strokeWidth='2px' />

                <polygon points='350,200 340,190 340,210' fill='black' />

                <polygon points='200,50 190,60 210,60' fill='black' />

                <circle cx='100' cy='200' r='3' fill='black' />

                <text x='100' y='220' textAnchor='middle' className='r-minus-label'> -R </text>

                <circle cx='150' cy='200' r='3' fill='black' />
                <text x='150' y='220' textAnchor='middle' className='r-half-minus-label'> -R/2 </text>

                <circle cx='250' cy='200' r='3' fill='black' />
                <text x='250' y='220' textAnchor='middle' className='r-half-label'> R/2 </text>

                <circle cx='300' cy='200' r='3' fill='black' />
                <text x='300' y='220' textAnchor='middle' className='r-label'> R </text>

                <text x='344' y='230' textAnchor='middle'>X</text>

                <circle cx='200' cy='100' r='3' fill='black' />
                <text x='180' y='104' textAnchor='middle' className='r-label'> R </text>

                <circle cx='200' cy='150' r='3' fill='black' />
                <text x='180' y='154' textAnchor='middle' className='r-half-label'> R/2 </text>

                <circle cx='200' cy='300' r='3' fill='black' />
                <text x='180' y='254' textAnchor='middle' className='r-half-minus-label'> -R/2 </text>

                <circle cx='200' cy='250' r='3' fill='black' />
                <text x='180' y='304' textAnchor='middle' className='r-minus-label'> -R </text>

                <text x='180' y='60' textAnchor='middle'>Y</text>


                <circle cx='200' cy='200' r='3' fill='#FF0000' id='point' />
            </svg>
        </div>
    );
}
export default Graph;
