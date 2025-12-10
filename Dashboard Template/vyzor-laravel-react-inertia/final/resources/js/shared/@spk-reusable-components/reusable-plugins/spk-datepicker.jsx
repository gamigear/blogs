import React from 'react';
import DatePicker from 'react-datepicker';


const SpkDatepickr = ({
  selected,
  onChange,
  dateFormat = 'dd/MM/yyyy',
  showTimeSelect = false,
  timeFormat = 'HH:mm',
  timeIntervals = 30,
  minDate,
  maxDate,
  Timeinput,
  isClearable,
  placeholderText = 'Select a date',
  className = '',
  disabled = false,
  Iconvisible,
  showTimeSelectOnly,
  showTimeInput,
  Localtime,
  showWeekNumbers,
  Caption,
  Inline,
  Yearpicker,
  endDate,
  selectsRange,
  startDate,
  ...props
}) => {
  return (
    <DatePicker selected={selected} startDate={startDate} onChange={onChange} dateFormat={dateFormat} timeInputLabel={Timeinput} showTimeSelect={showTimeSelect} timeFormat={timeFormat} timeIntervals={timeIntervals} showTimeSelectOnly={showTimeSelectOnly} minDate={minDate} maxDate={maxDate} isClearable={isClearable} placeholderText={placeholderText} className={className} endDate={endDate} disabled={disabled} showIcon={Iconvisible} inline={Inline} showTimeInput={showTimeInput} timeCaption={Caption} showMonthYearPicker={Yearpicker} locale={Localtime} selectsRange={selectsRange} showWeekNumbers={showWeekNumbers}
      {...props} // Forward any additional props to DatePicker
    />
  );
};

export default SpkDatepickr;
