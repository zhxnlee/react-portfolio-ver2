import { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Pages/Root';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseDown = () =>{
    setIsClicked(true);
  }

  const mouseUp = () => {
    setIsClicked(false)
  }

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => {
      setIsClicked(true);
    };

    const mouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);

 
  const router = createBrowserRouter([
    { path: "/", element: <Root /> }
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {/* Apply the correct transform style */}
      <div
        className={`cursor ${isClicked ? 'clicked' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
}

export default App;
