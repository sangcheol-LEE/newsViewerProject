import React,{useState, useEffect} from 'react';
import axios from '../../node_modules/axios/index';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBox = styled.div`
  box-sizing: border-box;
  padding-bottom : 3rem;
  width: 768px;
  margin : 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768) {
    width: 100%;
    padding-left: 1rem;
    padding-right:1rem;
  }
`;


const NewsList = ({category}) => {
  const [newData, setNewData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const query = category === 'all' ? "" : `&category=${category}`
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=99b9486811fe445f8cc48237ee99a883`,)
        setNewData(response.data.articles)
      } catch(e) {
        console.log(e)
      }
      setLoading(false);
    }
    fetchData()
  },[])

  if(loading) {
    return <NewsListBox>404 Not Found</NewsListBox>
  }

  if(!newData) {
    return null
  }

  return (
    <NewsListBox>
      {newData.map((news) => (
        <NewsItem key={news.url} news={news}/>
      ))}
    </NewsListBox>
  );
};

export default NewsList;