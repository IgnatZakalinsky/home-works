import React from 'react'
import SuperButton from '../../../hw04/common/c2-SuperButton/SuperButton'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    count: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, count, totalCount, onChange, id = 'hw15',
    }
) => {
    let pages = []
    const lastPage = Math.ceil(totalCount / count)

    for (let i = 1; i <= lastPage; i++) pages.push((
        <SuperButton
            key={id + '-page-' + i}
            id={id + '-page-' + i}
            onClick={() => onChange(i, count)}
            xType={i === page ? undefined : 'secondary'}

        >
            {i}
        </SuperButton>
    ))

    // 1 ... 4 5 (6) 7 8 ... 11 // выбрана страница 6
    // 1 2 3 4 (5) 6 7 ... 11 // выбрана страница 5
    // делает студент

    if ((page + 4) < lastPage) {
        pages[page + 2] = (
            <span key={id + '-span-' + (page + 3)} id={id + '-span-' + (page + 3)}>
                {' ... '}
            </span>
        )
        pages = pages.filter((p, i) => i < (page + 3) || i === (lastPage - 1))
    }
    if (page > 5) {
        pages[1] = (
            <span key={id + '-span-' + 2} id={id + '-span-' + 2}>
                {' ... '}
            </span>
        )
        pages = pages.filter((p, i) => i < 2 || i > page - 4)
    }

    //

    return (
        <div>
            <SuperSelect
                value={count}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={e => onChange(page, Number(e.currentTarget.value))}

            />

            {pages}
        </div>
    )
}

export default SuperPagination
