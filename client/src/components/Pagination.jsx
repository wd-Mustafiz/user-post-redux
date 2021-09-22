import { Pagination , PaginationItem  } from '@material-ui/lab';
import {Link} from 'react-router-dom'
import React from 'react';

import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
    ul: {
        justifyContent: 'space-around'
    }
}))
const Paginate = () => {
    const classes = useStyles()
    return (
        <Pagination
            classes={{ul: classes.ul}}
            count={5}
            page={1}
            variant="outlined"
            color='primary'
            renderItem={(item) =>(
                <PaginationItem  {...item} component={Link} to={`/posts/page${1}`} />
            )}

        />
    );
};

export default Paginate;