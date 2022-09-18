import "./reset.css";
import "./styles.css";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {
  ChatbubblesOutline,
  SunnyOutline,
  TrophyOutline,
} from "react-ionicons";
import Downshift from 'downshift';
import classNames from "classnames";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";

function ComboBox() {
  const items = require("./dataset/dataset.json");

  return (
    <Downshift
      onChange={selection =>
        alert(
          selection
            ? `You selected "${selection.name}" by ${selection.type}. Great Choice!`
            : 'Selection Cleared',
        )
      }
      itemToString={item => (item ? item.name : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <div className="autocomplete-container">
          <div className="autocomplete-search-container"
            {...getRootProps({}, { suppressRefError: true })}>
            <input
              placeholder="Your product, e.g PlayStation 4"
              className="search-bar"
              {...getInputProps()}
            />
            <button
              aria-label={'toggle menu'}
              className="autocomplete-button"
              type="button"
              {...getToggleButtonProps()}>
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button>
          </div>
          <ul
            className="autocomplete-suggestions"
            {...getMenuProps()}
          >
            {isOpen
              ? items
                .filter(
                  item =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue) ||
                    item.type.toLowerCase().includes(inputValue),
                )
                .map((item, index) => (
                  <li
                    className={classNames(
                      highlightedIndex === index && 'autocomplete-suggest-item-highlighted',
                      selectedItem === item && 'autocomplete-suggest-item-selected',
                      'autocomplete-suggestion',
                    )}
                    {...getItemProps({
                      key: item.name,
                      index,
                      item,
                    })}>
                    <span className="autocomplete-suggest-title">{item.name}</span>
                    <span className="autocomplete-suggest-desc">{item.type}</span>
                  </li>
                ))
              : null}
          </ul>
        </div>
      )};
    </Downshift>
  )
}

export function TaggedItem(props) {
  return (
    <div className="tagged-item">
      <div className="tagged-item-icon"></div>
      <Link to={props.link}>{props.text}</Link>
    </div>);
}

export function Card(props) {
  return (<div className="card">
    <section className="card-cover" id={props.id}>
      <h1 className="card-title">{props.title}</h1>
    </section>
    <section className="card-content">{props.text}</section>
  </div>);
}

export function HeaderItem(props) {
  return <li className="nav-item">
    <Link to={props.link}>{props.name}</Link>
  </li>;
}

export function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-items">
          <HeaderItem name="About" link="/about" />
          <HeaderItem name="Projects" link="/projects" />
          <HeaderItem name="Login" link="/login" />
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

export function Home() {
  return (<div>
    <main className="app-content">
      <Header />
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
      <p>What if we can change that?</p>
      <div className="tags">
        <TaggedItem text="other" link="/other" />
        <TaggedItem text="paper" link="/paper" />
        <TaggedItem text="glass" link="/glass" />
        <TaggedItem text="cotton" link="/cotton" />
        <TaggedItem text="polyester" link="/polyester" />
        <TaggedItem text="metal" link="/metal" />
        <TaggedItem text="electronics" link="/electronics" />
        <TaggedItem text="wood" link="/wood" />
        <TaggedItem text="plastic" link="/plastic" />
      </div>
      <ComboBox />
    </main>
    <div className="details">
      <DetailedItem
        icon={<SunnyOutline width="36px" height="36px" color={"#3fc486"} />}
        title="Your impact"
        desc="Learn statistics such as how much the product is produced a year, how likely it is to be in a landfill vs recycling center, and what the product is composed of."
      />
      <DetailedItem
        icon={<ChatbubblesOutline width="36px" height="36px" color={"#3fc486"} />}
        title="Invite friends"
        desc="Create your own 100% recycled project from scratch with the help of your friends, and earn points for every recycled item."
      />
      <DetailedItem
        icon={<TrophyOutline width="36px" height="36px" color={"#3fc486"} />}
        title="Earn awards"
        desc="Compete on a global leaderboard, make your community proud, and earn awards for your achievements."
      />
    </div>
  </div>
  );
}

export function Projects() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Router>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AccountRecovery" element={<ResetPassword />} />
            <Route path="/other" element={<div>other</div>} />
            <Route path="/paper" element={<div>paper</div>} />
            <Route path="/glass" element={<div>glass</div>} />
            <Route path="/cotton" element={<div>cotton</div>} />
            <Route path="/polyester" element={<div>polyester</div>} />
            <Route path="/metal" element={<div>metal</div>} />
            <Route path="/electronics" element={<div>electronics</div>} />
            <Route path="/wood" element={<div>wood</div>} />
            <Route path="/plastic" element={<div>plastic</div>} />

        </Routes>
      </Router>
      </UserAuthContextProvider>
    </div>
  );
}
