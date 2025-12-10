import React, { Fragment, useEffect, useState } from 'react';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { data$, getState } from '../../layouts-components/services/switcherServices';


const SpkRatings = ({ name, value, size = 'medium', defaultValue = null, max = 5, sx = {}, precision = 1, readOnly = false, onChange, getLabelText = (value) => `${value} Star`, onChangeActive, Icon }) => {
    let [variable, setVariable] = useState(getState());
    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setVariable(e);
        });

        return () => subscription.unsubscribe();
    }, []);
    let containerclass = variable.dir === 'ltr' ? "ltr" : "rtl"
    return (
        <Fragment>
            <Box sx={{ ...sx, direction: containerclass }}>
                <Rating
                    name={name}
                    value={value ?? 0}
                    onChange={onChange}
                    onChangeActive={onChangeActive}
                    getLabelText={getLabelText}
                    emptyIcon={Icon}
                    size={size}
                    defaultValue={defaultValue ?? 0}
                    precision={precision}
                    max={max}
                    readOnly={readOnly}
                />
            </Box>
        </Fragment>

    );
};

export default SpkRatings;
