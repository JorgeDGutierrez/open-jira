import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext);


    const onDragStart = (event: DragEvent) => {
        //console.log(event);
        event.dataTransfer.setData('text', entry._id);

        startDragging();

    }
    const onDragEnd = (event: DragEvent) => {

        endDragging();


    }
    const hora = new Date(entry.createdAt).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true });
    const fecha = new Date(entry.createdAt).toLocaleDateString();
    const horaFecha = ` Creado el ${fecha}${'  '}, a las ${hora}  `;


    return (

        <Card
            sx={{ marginBottom: 1 }}
            //Eventos de drag
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2, }} >
                    <Typography variant='body2' sx={{ color: '#7f00ff', padding: 0.5 }} >
                        {/* poner la hora */}
                        {horaFecha}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
