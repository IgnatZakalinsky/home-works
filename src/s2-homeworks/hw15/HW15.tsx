import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";

/*
* 1 - дописать SuperPagination
* 2 - дописать функцию send в HW15
* 3 - дописать функцию onChangeText в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

const getTechs = (params: any) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [totalCount, setTotalCount] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: any) => {
        getTechs(params)
            .then((res) => {
                // делает студент

                if (res) {
                    setTechs(res.data.techs)
                    setTotalCount(res.data.totalCount)
                }

                //
            })
    }

    const onChange = (newPage: number, newCount: number) => {
        // делает студент

        setPage(newPage)
        setCount(newCount)
        const pageQuery: { page?: string } = newPage !== 1 ? {page: newPage + ''} : {} // если стандарт - то не записывать в урл
        const countQuery: { count?: string } = newCount !== 4 ? {count: newCount + ''} : {} // если стандарт - то не записывать в урл
        const {count, page, ...lastQueries} = Object.fromEntries(searchParams)

        sendQuery({page: newPage || '', count: newCount || ''})
        setSearchParams({...lastQueries, ...pageQuery, ...countQuery})

        //
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery({page: params.page, count: params.count})
        setPage(+params.page || 1)
        setCount(+params.count || 4)
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.tech}>
            <span id={'hw15-tech-' + t.id}>
                {t.tech}
            </span>
            -----
            <span id={'hw15-developer-' + t.id}>
                {t.developer}
            </span>
        </div>
    ))

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework #15</div>

            <div className={s2.hw}>
                <SuperPagination
                    page={page}
                    count={count}
                    totalCount={totalCount}
                    onChange={onChange}
                />

                таблица:

                <div>
                    tech
                    <SuperButton // позже СуперСорт
                        onClick={() => setSort(sort === '1tech'
                            ? '0tech'
                            : sort == '0tech'
                                ? ''
                                : '1tech')}
                    >
                        {sort === '1tech'
                            ? '\\/'
                            : sort === '0tech'
                                ? '/\\'
                                : '-'}
                    </SuperButton>
                    developer
                    <SuperButton
                        onClick={() => setSort(sort === '1developer'
                            ? '0developer'
                            : sort === '0developer'
                                ? ''
                                : '1developer')}
                    >
                        {sort === '1developer'
                            ? '\\/'
                            : sort === '0developer'
                                ? '/\\'
                                : '-'}
                    </SuperButton>
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW15
