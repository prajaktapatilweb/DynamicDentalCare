import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const Drgalleryitem1 = ({ item }) => {
    return (

            <Box sx={{borderRadius:5,
                transition: (theme) => theme.transitions.create(['box-shadow']),
                boxShadow: 5,
                '&:hover': {
                    boxShadow: 2,
                    [`& .${iconButtonClasses.root}`]: {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        boxShadow: 2,
                    },
                },
            }}>
                <Box>

                    <Image
                        alt={'Clinic' + item.id}
                        src={`/images/Airoli/a/clinic${item}.jpg`}
                        width={100}
                        height={100}
                        style={{border:'5px solid #2b3478', padding:5,borderRadius:5}}
                        layout='responsive'></Image>

                </Box>

            </Box>
        );
};
export default Drgalleryitem1;
