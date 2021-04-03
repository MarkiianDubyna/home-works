import React, {useState, useEffect} from "react";
import './App.css';
import {POSTS, COMMENTS, ALBUMS, PHOTOS, TODOS, USERS, TABS , Components, urlBilder} from '../../home-works/src/constants/constants';
import Tabs from "../../home-works/src/components/tabs";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(TABS[0]);
  const [data, setData] = useState({
    [POSTS]: [],
    [COMMENTS]: [],
    [ALBUMS]: [],
    [PHOTOS]: [],
    [TODOS]: [],
    [USERS]: [],
  });
  const ComponentToRender = Components[selectedTab];
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(urlBilder(selectedTab));
    const json = await response.json();
    setData({...data, [selectedTab]: json});
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [selectedTab]);
  return (
      <div className="App">
        <Tabs tabs={TABS} selectedTab={selectedTab} onTabClick={tab => setSelectedTab(tab)} />
        {isLoading && !data[selectedTab].length ? <h2> LOADING...</h2> : (
            <ComponentToRender list={data[selectedTab]} />
        )}
      </div>
  );
}

export default App;


// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба- пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...