import React,{useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null)
  const onClick = async() => {
      try {
      const respons =  await axios.get(
            'https://newsapi.org/v2/top-headlines?country=kr&apiKey=99b9486811fe445f8cc48237ee99a883'
          );
          setData(respons)
      }catch(e) {
        console.log(e)
      }
    }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러기기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
};

export default App;