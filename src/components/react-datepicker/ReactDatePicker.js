import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd/MM/yyyy"
        // minDate={new Date()}
        // maxDate={new Date()}
        filterDate={date => date.getDate() !== 6 && date.getDate() !== 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        onChange={date => setSelectedDate(date)}
      ></DatePicker>
    </div>
  );
};

export default ReactDatePicker;
