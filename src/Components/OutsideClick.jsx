import React, { useEffect, useRef } from 'react'

const OutsideClick = (props) => {
    const ref = useRef(null);
const {onClickOutside, children} = props;

 const handleClickOutSide = (event) =>{
   if(ref.current && !ref.current.contains(event.target)){
    onClickOutside && onClickOutside();
   }
 }


 useEffect (() =>{
    document.addEventListener("click", handleClickOutSide, true);
    return () =>{
        document.removeEventListener("click", handleClickOutSide, true)
    };
 }, []);

 if(!children){
    return null;
 }
 return (<div ref={ref}>{children}</div>

 
  )
}

export default OutsideClick
