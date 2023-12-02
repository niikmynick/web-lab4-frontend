import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class Data extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { data, loading, error } = this.props;

        if (loading) {
            console.log("Loading");
        }

        if (error) {
            console.log("Error");
        }

        return (
            data?.map((outer, index) =>
                outer.map((n) =>
                    <tr key={index}>
                        <td> {n.x} </td>
                        <td> {n.y} </td>
                        <td> {n.r} </td>
                        <td> {n.status ? "In" : "Out"} </td>
                        <td> {n.requestTime} </td>
                        <td> {n.scriptTime} </td>
                    </tr>
                )
            )
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
