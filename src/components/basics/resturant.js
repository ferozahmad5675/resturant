import React from 'react'
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList =[
    ...new Set(
        Menu.map((curElem)=>{
            return curElem.category
        })
    ),
    "ALL"
]

const Resturant = () => {

   const[menuData , setMenuData]= React.useState(Menu);
   const[menuList , setMenuList]= React.useState(uniqueList);

   

   const filteritem =(category) =>{

    if(category==="ALL"){
        setMenuData(Menu);
        return;
    }
    const updateList = Menu.filter((curEle)=>{
    return curEle.category === category;
   })
   setMenuData(updateList);
}
   
  return (
    <>
    <Navbar filteritem ={filteritem} menuList={menuList} />
    <MenuCard menuData={menuData} />
    </>
  )
}


export default Resturant