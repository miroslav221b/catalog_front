import React, { useEffect, useRef, useState } from "react";
import style from "../style/components/Filter.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/slices/shopSlice";
const Filter = ({ filterSeting, optionList, secFilterSeting, name }) => {
    let FilterDefVall
    const [isActive, setIsActive] = useState(false)
    const filters = useSelector((state) => {
        return state.shop.filters
    })
    const [selected, setSelected] = useState({name})
    useEffect(()=>{
        if(filters.hasOwnProperty(filterSeting)){
            for(let item of optionList){
                if(filters[filterSeting] === item.value){
                    setSelected(item)
                }
            }
        }else if(filters.hasOwnProperty(secFilterSeting)){
            for(let item of optionList){
                if(filters[secFilterSeting] === item.value){
                    setSelected(item)
                }
            }
        }
    },[filters])
    const dispatch = useDispatch()
    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })
    function onItemClick(item) {

        setSelected(item)
        setIsActive(!isActive)
        // dispatch(setActivePage(1))

        let newFilters = { ...filters, page: 1 }
        item.value ? newFilters[filterSeting] = item.value : delete newFilters[filterSeting]
        item.secValue ? newFilters[secFilterSeting] = item.secValue : delete newFilters[secFilterSeting]

        dispatch(setFilters(newFilters))
    }
    return (
        <div className={style.filter} ref={menuRef}>
            <div className={isActive ? `${style.filter_btn_active} ${style.filter_btn}` : style.filter_btn} onClick={() => { setIsActive(!isActive) }}>
                {selected.name }
            </div>
            <div className={isActive ? `${style.filter_content} ${style.filter_content_active}` : style.filter_content}>
                {optionList.map((item) => {
                    if (item.name !== selected.name || !filters.hasOwnProperty(filterSeting)) {
                        return (
                            <div onClick={() => { onItemClick(item) }} className={style.filter_item} key={item.name}>
                                {item.name}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Filter