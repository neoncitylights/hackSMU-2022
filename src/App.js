import "./reset.css";
import "./styles.css";
import {
  ChatbubblesOutline,
  SunnyOutline,
  TrophyOutline,
} from "react-ionicons";
import Downshift from 'downshift';
import classNames from "classnames";

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
            {...getRootProps({}, {suppressRefError: true})}>
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
      )}
    </Downshift>
  )
}

export function Card(props) {
  return (<div className="card">
    <section className="card-cover" id={props.id}>
      <h1 class="card-title">{props.title}</h1>
    </section>
    <section class="card-content">{props.text}</section>
  </div>);
}

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
        <ComboBox />
      </main>
      <div class="details">
      <DetailedItem
          icon={<SunnyOutline width="36px" height="36px" />}
          title="Your impact"
          desc="Learn statistics such as how much the product is produced a year, how likely it is to be in a landfill vs recycling center, and what the product is composed of."
        />
        <DetailedItem
          icon={<ChatbubblesOutline width="36px" height="36px" />}
          title="Invite friends"
          desc="Create your own 100% recycled project from scratch with the help of your friends, and earn points for every recycled item."
        />
        <DetailedItem
          icon={<TrophyOutline width="36px" height="36px" />}
          title="Earn awards"
          desc="Compete on a global leaderboard, make your community proud, and earn awards for your achievements."
        />
      </div>
    </div>
  );
}
