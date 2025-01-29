import "./App.css";
import Button from "./components/Button";
import Link from "./components/Link";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="app text-preset-5">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde
        voluptatibus laboriosam atque placeat quaerat voluptate id, quas amet
        consequuntur quidem sint laudantium nemo, facere molestias quos, a
        nulla. Quas?
      </p>

      <Logo />

      <Button>Get Started</Button>
      <Button color="orange">Get Started</Button>
      <Button color="purple">Get Started</Button>

      <Link></Link>
    </div>
  );
}

export default App;
