import React from 'react';
import Select from "react-dropdown-select";


const SpkMultiselect = ({ options, mainClass, placeholder, multi = true, labelField, valueField, values = [], clearable = true, searchable = true, disabledLabel, loading = false, onChange, onSelect = () => { }, onDeselect = () => { }, noDataLabel, dropdownHeight }) => {
    return (
        <Select
            className={mainClass}
            placeholder={placeholder}
            multi={multi}
            labelField={labelField}
            valueField={valueField}
            options={options}
            values={values}
            clearable={clearable}
            searchable={searchable}
            disabledLabel={disabledLabel}
            loading={loading}
            onChange={onChange}
            onSelect={onSelect}
            onDeselect={onDeselect}
            noDataLabel={noDataLabel}
            dropdownHeight={dropdownHeight}
        />
    );
};

export default SpkMultiselect;

