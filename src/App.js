import "./App.css";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Cards from "./note";
import { Col, Row, Input, Card, CardText, CardHeader } from "reactstrap";
import notes from "./notes";
var n = notes.length;
function App() {
  const [notex, setNotex] = useState(notes);

  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  function transform(note) {
    return (
      <div>
        <Cards title={note.name} description={note.description} key={note.id} />
      </div>
    );
  }
  function clickFunc(event) {
    event.preventDefault();
    var id = ++n;
    var name = title;
    var description = des;
    var array = [...notex, { id, name, description }];
    setNotex(array);
    console.log(notex);
    setTitle("");
    setDes("");
  }
  function titleTyped(event) {
    var text = event.target.value;
    setTitle(text);
  }
  function desTyped(event) {
    var desc = event.target.value;
    setDes(desc);
  }
  return (
    <div className="App">
      <Header />

      <br></br>
      <center>
        <Col sm="12" className="mt-4">
          <CardHeader
            tag="h6"
            className="text-white"
            style={{ backgroundColor: "#FFC300", width: "230px" }}
          >
            <Input
              type="text"
              placeholder="Note title"
              onChange={titleTyped}
              name="notetitle"
              value={title}
            />
          </CardHeader>
          <Card className="cardbig" body>
            <CardText style={{ fontSize: "14px" }}>
              <Input
                type="textarea"
                placeholder="Type new note here..."
                rows="5"
                name="notee"
                onChange={desTyped}
                value={des}
              />
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "#FFC300",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  borderColor: "yellow",
                  color: "white",
                }}
                onClick={clickFunc}
              >
                {" "}
                Add{" "}
              </button>
            </CardText>
          </Card>
        </Col>
      </center>

      <Row>{notex.map(transform)};</Row>

      <Footer />
    </div>
  );
}

export default App;
