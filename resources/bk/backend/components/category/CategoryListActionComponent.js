import React, { useState } from 'react';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function CategoryListActionComponent(props)
{
    const { row, onDeleteRow } = props;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const deleteRow = () => {
        if (onDeleteRow) {
            onDeleteRow(row);
        }
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size={size}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="menu"
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <i className="mdi mdi-pencil font-size-16 text-success mr-1">
                    </i> Edit
                </MenuItem>

                <MenuItem>
                    <i className="mdi mdi-trash-can font-size-16 text-danger mr-1">
                    </i> Delete
                </MenuItem>
            </Menu>
        </div>
    );
}

export default CategoryListActionComponent;
