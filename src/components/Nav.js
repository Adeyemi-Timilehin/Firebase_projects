import * as React from 'react';
import Stack from '@mui/material/Stack';
import BasicButtons from './common/Button'
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <div>
        <Stack spacing={2} direction="row">
        <Link to="/login"> <BasicButtons>LOGIN</BasicButtons></Link>
        <Link to="/register"><BasicButtons>REGISTER</BasicButtons></Link>
      </Stack>
        </div>
    )
}
