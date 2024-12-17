import { BrowserRouter, Route, Route } from 'react-router-dom';
import NotFound from './404 pages/404page.js';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={ToDoList} />
            <Route path="*" component={NotFound} />
        </BrowserRouter>
    )
}