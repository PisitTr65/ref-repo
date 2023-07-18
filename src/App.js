import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import { useRef } from "react";

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
        to="/product"
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
  const header1 = useRef();
  return (
    <>
      <Layout />
      <h3 ref={header1}>Hello</h3>
      <Button
        onClick={() => {
          header1.current.innerHTML = "React";
        }}
      >
        Click Me
      </Button>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const Index = tr.current[i].rowIndex;
    table.current.deleteRow(Index);
  };

  const date = [
    ["กางเกงยืนส์", 1200],
    ["เสื้อยืด", 350],
    ["กางเกงขาสั้น", 450],
    ["หมวก", 500],
  ];

  return (
    <>
      <Layout />
      <h4>products</h4>
      <Table striped bordered hover className="my-3" ref={table}></Table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {date.map((item, i) => {
          return (
            <tr
              ref={(el) => {
                tr.current[i] = el;
              }}
              key={i}
            >
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td className="text-center">
                <Button variant="danger" onClick={() => DeleteRow(1)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
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
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
