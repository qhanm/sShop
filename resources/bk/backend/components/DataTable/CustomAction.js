import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const CustomAction = (props) => {

    const { row, onDeleteRow, size, handleOnClickEdit } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
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

    const onClickEdit = (event) => {
        handleOnClickEdit(row);
    }

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
                <MenuItem onClick={ onClickEdit }>
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
};

export default CustomAction;
