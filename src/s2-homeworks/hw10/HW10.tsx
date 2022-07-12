import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from './bll/store'
import { loadingAC } from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import { Loader } from './Loader'

const HW10 = () => {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(
        (state: any) => state.loading.isLoading
    )
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))

        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
        // console.log('loading...')
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>homeworks 10</div>

            {/*should work (должно работать)*/}
            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader />
                    </div>
                ) : (
                    <div>
                        <SuperButton
                            id={'hw10-button-start-loading'}
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HW10
