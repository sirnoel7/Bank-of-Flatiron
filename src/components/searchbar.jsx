import React, { useState } from "react";

function Searchbar({ data, setData }) {
  const [searchQuery, setSearchQuery] = useState(""); // this causes the state to store the searchquery as a string

  const handleSearch = (e) => { // Function to handle search input change
    const query = e.target.value.toLowerCase(); //this gets the search query from the input and converts it to lowercase
    setSearchQuery(query); //this updates the state of the search query

    const filteredData = data.filter((item) => //this filters the data in the table based on search query
      Object.values(item).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(query)
      )
    );

    setData(filteredData); // Update the data with filtered results
  };

  return (
    <form>
      <div className="search">
        <input
          style={{ width: "80%", height: "20px" }}
          type="text"
          placeholder="Search for your recent transactions"
          value={searchQuery}
          onChange={handleSearch}
        ></input>
      </div>
      <div className="othersearch">
      <input
          style={{ width: "20%", height: "20px" }}
          className="date1"
          type="text"
          placeholder="Date"
          aria-label=".form-control-lg example"
        ></input>
        <input
          style={{ width: "20%", height: "20px" }}
          className="description1"
          type="text"
          placeholder="Description"
          aria-label="default input example"
        ></input>
        <input
          style={{ width: "20%", height: "20px" }}
          className="category1"
          type="text"
          placeholder="Category"
          aria-label=".form-control-sm example"
        ></input>
        <input
          style={{ width: "20%", height: "20px" }}
          className="amount1"
          type="text"
          placeholder="Amount"
          aria-label=".form-control-sm example"
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            const newTransaction = {
              date: document.querySelector(".date1").value,
              description: document.querySelector(".description1").value,
              category: document.querySelector(".category1").value,
              amount: document.querySelector(".amount1").value
            };
            setData([...data, newTransaction]);
          }}
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
