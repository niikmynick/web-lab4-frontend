import React from 'react';
import '../App.css';
import Data from '../utils/Data';

export default class ResultsTable extends React.Component {

    render() {
        return (
            <table id="results-table">
                <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Status</th>
                    <th>Time</th>
                    <th>Script time</th>
                </tr>
                </thead>

                <tbody id="results-body">
                    <Data />
                </tbody>
            </table>
        );
    }
}