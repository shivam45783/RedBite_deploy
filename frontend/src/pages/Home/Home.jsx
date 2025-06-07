import React, { useState, useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Loading from '../../components/Loading/Loading'
import { StoreContext } from '../../context/StoreContext'
const Home = () => {
  
  const [category, setCategory] = useState("All");
  const {loading, setLoading} = useContext(StoreContext);
  return (
    <div>
        <Header/>
        <ExploreMenu category = {category} setCategory = {setCategory}/>
        <FoodDisplay category = {category} />
        <Loading show =  {loading? "hidden" : ""}/>
    </div>
  )
}

export default Home