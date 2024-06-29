import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const SearchAutoComplete = ({ url = "https://dummyjson.com/users" }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (evt) => {
    const query = evt.target.value.toLowerCase();
    setSearchParam(query);

    if (query?.length > 1) {
      const filteredData = users?.length
        ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data?.users?.length) {
        setUsers(data.users.map((user) => user.firstName));
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (item) => {
    setShowDropdown(false);
    setSearchParam(item);
    setFilteredUsers([]);
  };

  useEffect(() => {
    fetchListOfUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //if (loading) return <div>Loading data...</div>;

  if (errorMessage) return <div>Error encountered: {errorMessage}</div>;

  console.log(users);
  console.log(filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading && <h1>Loading data...</h1>}
      <input
        name="search-users"
        placeholder="Search Users here..."
        className=""
        value={searchParam}
        onChange={handleInputChange}
      />
      {showDropdown && (
        <Suggestions data={filteredUsers} onSelect={handleSelect} />
      )}
    </div>
  );
};

export default SearchAutoComplete;
