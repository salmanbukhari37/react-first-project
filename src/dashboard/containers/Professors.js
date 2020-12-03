import React from "react";
import Button from "../components/Button";
import Result from "../components/Result";
import Table from "../components/Table";

class Professors extends React.Component {

    state = {
        counter: 0,
        initialMultiplyVal: 1,
        result: 0,
        customerTHead: [
            {id: "customerId", value: "Customer ID"},
            {id: "sku", value: "SKU"},
            {id:"purchasedItem", value: "Purchased Item"},
            {id: "date", value: "Date"},
        ],
        customerTBody: [
            {
                customerId: 141231,
                sku: "AVB-42131",
                purchasedItem: "Toyota Car",
                date: "2020-11-02",
            },
        ],
        tableBody: [
            {
                "Roll Number": 1,
                "Name": "Salman",
                "Email": "salmanbukhari37@gmail.com",
                "phone": "03349081615",
                "Semester": "1st",
                "Year": 2020,
                "Batch": 1,
                "GPA": "3.3"
            }
        ]
    }

    getKeys = () => {
        return Object.keys(this.state.tableBody[0]);
    }

    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    multiply = () => {
        this.setState({
            result: this.state.counter * this.state.initialMultiplyVal
        });
    }

    inputChangeHandler = (e) => {
        this.setState({
            initialMultiplyVal: e.currentTarget.value
        })
    }

    render () {
        console.log();
        return (
            <section>
                <input type="text" value={this.state.initialMultiplyVal} onChange={(e) => this.inputChangeHandler(e)} />
                <h1>{this.state.counter}</h1>
                <Result result={this.state.result}/>

                <Button clsName="btn btn-danger" btnText="-" changeHandler={this.decrement} />
                <Button clsName="btn btn-primary" btnText="+" changeHandler={this.increment}/>
                <Button clsName="btn btn-info" btnText="Result" changeHandler={this.multiply}/>

                <Table tHead={this.getKeys()} tBody={this.state.tableBody}/>
                <Table tHead={this.state.tableHead} tBody={this.state.tableBody}/>
                {/* <Button clsName={this.state.button.cls} changeColor={this.changeButtonColorHandler} /> */}
            </section>
        );
    }
}

export default Professors;