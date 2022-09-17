import "./reset.css";
import "./styles.css";
import { SunnyOutline, TrophyOutline, CubeOutline } from "react-ionicons";

export function HeaderItem(props) {
  return <li className="nav-item">{props.name}</li>;
}

export function Header() {
  return (
    <header class="header">
      <nav class="header-nav">
        <ul class="nav-items">
          <HeaderItem name="About" />
          <HeaderItem name="Projects" />
          <HeaderItem name="Login" />
        </ul>
      </nav>
    </header>
  );
}

export function DetailedItem(props) {
  return (
    <div className="detailed-item">
      <div className="detailed-icon">{props.icon}</div>
      <div className="detailed-content">
        <span className="detailed-content-title">{props.title}</span>
        <span className="detailed-content-desc">{props.desc}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="app-content">
        <h1>
          Creating a <mark>Sustainable</mark> Future
        </h1>
        <p>
          The 21st century has lead to astronomical technological developments
          at an exponential rate.
        </p>
        <p>
          At the same time, our planet is filled with toxic waste that damages
          ecosystems at scale.
        </p>
        <input
          type="search"
          className="search-bar"
          placeholder="Your products, e.g PlayStation 4"
        />
      </main>
      <div class="details">
        <DetailedItem
          icon={<SunnyOutline width="36px" height="36px" />}
          title="Your impact"
          desc="test"
        />
        <DetailedItem
          icon={<TrophyOutline width="36px" height="36px" />}
          title="Earn awards"
          desc="test"
        />
        <DetailedItem
          icon={<CubeOutline width="36px" height="36px" />}
          title="test"
          desc="test"
        />
      </div>
    </div>
  );
}
