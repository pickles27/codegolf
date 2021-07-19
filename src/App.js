import './App.css';
import { NewsFeed } from './home/NewsFeed/NewsFeed';
import { mockSubmissions } from './mockData'

function App() {
  return (
    <div className="App">
      <NewsFeed submissions={mockSubmissions} />
    </div>
  );
}

export default App;
