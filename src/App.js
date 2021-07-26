import './App.css';
import headerImg from "./assets/Header_Image.png"
// import imagePlaceholderIcon from "./assets/Icon_Image.svg"
import profilePic from "./assets/Profile_picture.png"
// import editIcon from "./assets/Edit_icon.svg"
import verifiedIcon from "./assets/icons8_verified_account.svg"
import NFTCard from "./NFTCard"
function App() {
  return (
    <div className="App">
      <header>
        HEADER
      </header>
      <div className = "main-body">
        <div className = "cover-photo-container">
          <img src = {headerImg} alt = "header"className = "cover-photo-image" />
        </div>
        <div className = "content-section">
          <div className = "user-profile-card">
            <div className = "user-details-section">
              <div className = "profile-picture-container">
                <img src = {profilePic} alt = "user profile avatar"className = "profile-picture" />
              </div>
              <div className = "user-details">
                <h2>Karla Gyan <img src = {verifiedIcon} className = "verified-icon" alt = "verified icon" /></h2>
                <p>0x495f947245...cb7b5eby</p>
              </div>
              <div className = "user-about-section">
                <p>A 2D hyper-realist artist with 10 years experience designing portrait for influential celebrities and goverment officials</p>
              </div>
              <div className = "user-history">
                <div className = "history-item">
                  <h3>2,000</h3>
                  <p>NFTs Created</p>
                </div>
                <div className = "history-item">
                  <h3>45</h3>
                  <p>NFTs Sold</p>
                </div>
                <div className = "history-item">
                  <h3>24</h3>
                  <p>NFTs Bought</p>
                </div>
              </div>
            </div>
            <button className = "follow-button">Follow Karla</button>
          </div>
          <div className = "nfts-section">
            <h1 className = "section-title">NFTs</h1>
            <div className = "nft-nav">
              <ul>
                <li><button className = "active-nft-nav">On Sale</button></li>
                <li><button>Created</button></li>
                <li><button>Collections</button></li>
                <li><button>Bought</button></li>
                <li><button>Following</button></li>
              </ul>
            </div>
            <div className = "nfts-container">
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
            </div>
          </div>
        </div>
      </div>
      <footer>
        FOOTER
      </footer>
    </div>
  );
}

export default App;
