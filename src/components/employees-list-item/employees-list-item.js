import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: props.salary
        }
    }

    onChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
        this.props.salaryChanged(this.state.salary);

    }


    render() {
        const { name, onDelete, onToggleProp, increase, rise, newAdd, } = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
        if (newAdd) {
            classNames += ' new'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}<span className='toRise'>To rise</span></span>
                <div className='salary'>
                    <input type="number" className="list-group-item-input"
                        defaultValue={this.props.salary}
                        onChange={this.onChangeSalary}
                    />
                    <span>$</span>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                        <span className='toAward'>To award</span>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                        <span className='toDel'>To delete</span>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;