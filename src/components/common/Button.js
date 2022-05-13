import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title,children,  handleAction}) {
    return (
        <Button variant="contained" onClick={handleAction}>{title || children}</Button>
    );
}