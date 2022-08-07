import React,{useState,useCallback} from 'react';
import Category from '../Components/Category';
import NewsList from '../Components/NewsLIst';

const Main = () => {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => {
    setCategory(category)},[])
  return (
    <>
       <Category category={category} onSelect={onSelect}/>
       <NewsList category={category}/>
    </>
  );
};

export default Main;