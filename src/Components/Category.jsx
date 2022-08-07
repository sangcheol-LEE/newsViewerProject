import React from 'react';
import { NavLink } from '../../node_modules/react-router-dom/index';
import styled from 'styled-components';

const CategoryBlock = styled.div`
    display:flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and(max-width: 768px) {
      width: 100%;
      overflow-x:auto;
    }
  `;

const Cate = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration : none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
      color: #495057;
    }

    &.active {
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    }

    & + & {
      margin-left : 1rem;
    }
  `;
  
const Category = ({ onselect }) => {
  const categories = [
    { 
      id:1,
      name: 'all',
      text: '전체보기'
    },{
      id:2,
      name: 'business',
      text: '비즈니스'
    },{
      id:3,
      name: 'entertainment',
      text: '엔터테인먼트'
    },{
      id:4,
      name: 'health',
      text: '건강'
    },{
      id:5,
      name: 'science',
      text: '과학'
    },{
      id:6,
      name: 'sports',
      text: '스포츠'
    },{
      id:7,
      name: 'technology',
      text: '기술'
    },
  ]


  return (
    <CategoryBlock>
      {categories.map((category) => (
            <Cate
              key={category.id}
              activeClassName="active"
              exact={category.name === 'all'}
              to={category.name === "all" ? '/all' : `/${category.name}`}
              onClick={() => onselect(category.name)}
            >
                {category.text}
            </Cate>
      ))}
    </CategoryBlock>
  );
};

export default Category;