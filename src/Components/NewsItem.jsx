import React from 'react';
import styled from 'styled-components';

const NewsItemBox = styled.div`
  display:flex;

    .thumnail {
      margin-right: 1rem;

      img {
        display:block;
        width: 160px;
        height: 100px;
        object-fit: cover;
      }
    }

  .contents {
    h2 {
      margin: 0;
      a {
        color : black;
        }
      }
    p {
      margin : 0;
      line-height: 1.5;
      margin-top : 0.5rem;
      white-space: normal;
      }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({news}) => {
  const {title,description,url,urlToImage } = news
  return (
    <NewsItemBox>
      { urlToImage && ( 
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="url"/>
          </a>
        </div>
      )}

      <div className="contents">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </NewsItemBox>
  );
};

export default NewsItem;