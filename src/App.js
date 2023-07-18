import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="bg-secondary p-2 mb-3 text-center">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/Product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Product
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Contact Us
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <h3>Hello</h3>
      <Button>Click Me</Button>
    </>
  );
}

function Product() {
  return (
    <>
      <Layout />
      <h4>products</h4>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
