import React, { Component } from "react";
import { connect } from "react-redux";
import { DATA } from "../../redux/action/data";
import Pagination from "../../components/pagination";
import Item from "../../components/item";
import "../../styles/style.scss"

class Dashboard extends Component {
    state = {
        currentPage: 1,
        itemsPerPage: 5
    };

    componentDidMount() {
        this.props.DATA()
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };


    render() {
        const { loading, data } = this.props;
        const { currentPage, itemsPerPage } = this.state;

        if ( loading ) {
            return <h3>Loading....</h3>
        }

        const indexOfLastElem = currentPage * itemsPerPage;
        const indexOfFirstElem = indexOfLastElem - itemsPerPage;
        const currentElems = data.users.slice(indexOfFirstElem, indexOfLastElem);
        const renderTodos = currentElems.map(Item);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.users.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Pagination key={number} number={number} handleClick={this.handleClick} selected={number===currentPage}/>
            );
        });

        return (
            <div className="dashboard">
                {renderTodos}
                <ul className="pagination">
                    {renderPageNumbers}
                </ul>
            </div>

        )
    }
}


export default connect(store =>({
    loading: store.items.isLoading,
    data: store.items.data,
}),{ DATA })(Dashboard);