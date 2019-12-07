import React from 'react';
import Columns from './Columns'

const Table = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
            </tbody>
        </table>
    )
}

export default Table