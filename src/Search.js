import React, { useState } from 'react'
import './Search.css'
// main style file
import "react-date-range/dist/styles.css";
// theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

// Date Picker
function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]}
                onChange={handleSelect} />
            <h2>
                Number Of Guests
                <PeopleIcon />
            </h2>
            <input min={0}
                defaultValue={2}
                type="number" />
            <Button>Search
                AirBnb</Button>
        </div>
    )
}

export default Search