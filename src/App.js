import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import './App.css'; // Import the App.css file

const App = () => {
    return (
        <div>
            <Navbar />
            <MainPage />
        </div>
    );
};

export default App;

