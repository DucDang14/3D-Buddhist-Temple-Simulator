import TempleScene from './scenes/TempleScene';


function App() {
  return (
    <main>
      {/* Temporary page introduction above the 3D scene */}
      <h1>Online Pagoda</h1>
      <p>Welcome to the Online Pagoda!</p>
      
      {/* CSS gives the canvas a visible height inside this container. */}
      <div className="scene-container">
        <TempleScene />
      </div>
    </main>
  );
}

export default App;
