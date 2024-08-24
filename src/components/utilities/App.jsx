import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { increment, decrement, setData, setError } from '../../redux/actions';

const App = () => {
  const count = useSelector((state) => state.count);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=tesla&from=2024-07-24&sortBy=publishedAt&apiKey=b4f0182f44494f48b527e0b5b7d2cc3f'
        );
        const articles = response.data.articles;
        dispatch(setData(articles));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h2>News Articles about Tesla:</h2>
      {error ? <p>Error: {error}</p> : null}
      <ul>
        {data.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;