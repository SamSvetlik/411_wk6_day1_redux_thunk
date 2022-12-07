import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteMake } from '../redux/actions'

const Import = (props) => {
    

    return (
        <>
        <p>Import Component</p>
        <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
        <h2>COUNT: {props.makes.length}</h2>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.makes.map((make, index) => {
                    return (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <Button variant='outlined' color='error' onClick={()=> props.deleteMake(index)}>
                                    <DeleteIcon />
                                </Button>
{/* Readme has instructions to use 4 different nested components here, to bring up a pop-down menu that contains one selection.  The readme references old MUI documentation, and I couldn't figure out the new documentation for "Max height menu", so I improvised with something simpler that accomplishes the goal of deleting the item. */}

                            </TableCell>
                        </TableRow>
                    )
                })
                }
            </TableBody>
        </Table>
        </>
    )
}

export default Import