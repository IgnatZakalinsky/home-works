import React from 'react'
import { Slider, SliderProps } from '@mui/material'

// здесь мы говорим что у нашего слайдера будут такие же пропсы как у обычного mui слайдера
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = SliderProps

const SuperRange: React.FC<SuperRangePropsType> = ({
    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    return (
        <>
            <Slider
                id={'hw11-single-slider'}
                sx={{
                    width: '160px',
                    color: '#00CC22',
                    '& .MuiSlider-track': {
                        border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                        width: 20,
                        height: 20,
                        border: '1px solid #00CC22',
                        backgroundColor: '#fff',
                        '&:before': {
                            content: '""',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#00CC22',
                            zIndex: -1,
                        },
                        '&:hover, &.Mui-focusVisible, &.Mui-active': {
                            boxShadow: 'none',
                        },
                    },
                }}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    )
}

export default SuperRange
