import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Checkboxes = ({checkedM, checkedW, checkedQ, handleChangeCheckbox}) => {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedM}
                        onChange={handleChangeCheckbox}
                        name="checkedM"
                        color="default"
                    />
                }
                label="male"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedW}
                        onChange={handleChangeCheckbox}
                        name="checkedW"
                        color="default"
                    />
                }
                label="female"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedQ}
                        onChange={handleChangeCheckbox}
                        name="checkedQ"
                        color="default"
                    />
                }
                label="unknown"
            />
        </div>
    );
};

export default Checkboxes;