import React, { Component } from "react";
import usersData from "../../data/usersData";
import SearchInput from "../Search/Search";
import "./Contacts.css";
import Contact from "../Contact/Contact";
import Checkboxes from "../Checkboxes/Checkboxes";

class Contacts extends Component {
  state = {
    contacts: usersData,
    filteredContactData: usersData,
    isUsers: true,
    searchValue: "",
    checkedM: true,
    checkedW: true,
    checkedQ: true,
  };

  onSearchHandler = (event) => {
    this.setState(
      {
        searchValue: event,
      },
      () => {
        this.searchedContacts(this.state.searchValue);
      }
    );
  };

  searchedContacts = (value) => {
    const data = [...this.state.contacts];
    const transformData = data.filter((item) => {
      return (
        item.lastName.toLowerCase().includes(value.toLowerCase()) ||
        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
        item.phone.includes(value)
      );
    });
    this.setState({
      filteredContactData: transformData
    });
  };

  handleChangeCheckbox = (event) => {
    this.setState(
      { ...this.state, [event.target.name]: event.target.checked },
      () => this.genderFiltration()
    );
  };

  genderFiltration = () => {
    const data = [...this.state.contacts];
    const manArray = data.filter((item) => {
      return this.state.checkedM && item.gender === "male";
    });
    const womenArray = data.filter((item) => {
      return this.state.checkedW && item.gender === "female";
    });
    const questionArray = data.filter((item) => {
      return this.state.checkedQ && item.gender === undefined;
    });
    const result = [...manArray, ...womenArray, ...questionArray];
    this.setState({
      filteredContactData: result,
    });
  };

  render() {
    const contacts = this.state.filteredContactData.map((item, index) => {
      return <Contact key={item + index} {...item} />;
    });

    return (
      <div>
      <div className="back">
      </div>
      <div className="contacts">
          <SearchInput onSearchHandler={this.onSearchHandler} />
          <Checkboxes
              checkedM={this.state.checkedM}
              checkedW = {this.state.checkedW}
              checkedQ = {this.state.checkedQ}
              handleChangeCheckbox = {this.handleChangeCheckbox}
          />
          <ul className="contacts-list">
            {contacts.length ? contacts : <h2>No results</h2>}
          </ul>
        
      </div>
      </div>
    );
  }
}

export default Contacts;