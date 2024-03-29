import { ChangeEvent, useContext, useState } from 'react';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { Box, Button, TextField } from '@mui/material'
import { RestaurantMenu } from '@mui/icons-material';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';


export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);


    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if (inputValue.length === 0) return;
        console.log('Saving: ', inputValue);
        //addNewEntry(inputValue);
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');

    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder="Nueva entrada"
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            helperText={inputValue.length <= 0 && touched && 'Debe ingresar un valor'}
                            error={inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setTouched(true)}
                        />

                        <Box display='flex' justifyContent='space-between' >
                            <Button
                                variant="text"
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                endIcon={<SaveOutlinedIcon />}
                                onClick={onSave}

                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
                )
                    : (
                        <Button
                            startIcon={<AddCircleOutlinedIcon />}
                            fullWidth
                            variant='outlined'
                            onClick={() => setIsAddingEntry(true)}
                        >
                            Agregar Tarea
                        </Button>

                    )
            }
        </Box>
    )
};
