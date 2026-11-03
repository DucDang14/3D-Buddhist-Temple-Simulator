import TempleScene from './scenes/TempleScene';


function App() {
  return (
    <main>
      <h1>Online Pagoda</h1>
      <p>Drag to orbit the scene. Scroll to zoom.</p>
      
      <div className="scene-container">
        <TempleScene />
      </div>
    </main>
  );
}

export default App;