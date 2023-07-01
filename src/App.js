import logo from './logo.svg';
import './App.css';
import CardBlog from './card';
function App() {
  return (
    <>
      <nav class="navbar bg-body-tertiary" style={{ backgroundColor: '#e3f2fd' }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src='/aaragrp.png' alt="Logo" width="60" height="50" class="d-inline-block align-text-top" />
            <span style={{ fontSize: '10px' }}>Blog</span>
          </a>
        </div>
      </nav>

      {/* <div class="container text-center " style={{ marginTop: "20px" }}>
        <div class="row align-items-center">
          <div class="col">
            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./studying.jpg" class="img-fluid rounded-start" alt="..."  style={{height:'-webkit-fill-available '}}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./web.jpg" class="img-fluid rounded-start" alt="..." style={{height:'-webkit-fill-available '}}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./nature.jpg" class="img-fluid rounded-start" alt="..." style={{height:'-webkit-fill-available '}}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}
      <br/>
      <CardBlog/>
    </>
  );
}

export default App;
