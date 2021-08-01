import { NewsFeed } from './home/NewsFeed/NewsFeed';
import { mockSubmissions } from './mockData';
import './App.css';

function App() {
  return (
    <div className="App">
      <NewsFeed submissions={mockSubmissions} />
    </div>
  );
}

export default App;
