import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

// Define interface for the todo item
interface TodoItem {
    id: number;
    value: string;
}

// Define interface for Component State
interface AppState {
    userInput: string;
    list: TodoItem[];
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Set a user input value
    updateInput(value: string) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input is not empty
    addItem() {
        if (this.state.userInput.trim() !== "") {
            const newItem: TodoItem = {
                // Add a random id which is used to delete
                id: Math.random(),

                // Add a user value to list
                value: this.state.userInput.trim(),
            };

            // Update list
            this.setState((prevState) => ({
                list: [...prevState.list, newItem],
                userInput: "",
            }));
        }
    }

    // Function to delete item from list use id to delete
    deleteItem(id: number) {
        const updateList = this.state.list.filter((item) => item.id !== id);

        // Update list in state
        this.setState({
            list: updateList,
        });
    }

    editItem = (index: number) => {
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            const updatedTodos = this.state.list.map((item, idx) => {
                if (idx === index) {
                    return { ...item, value: editedTodo.trim() };
                }
                return item;
            });
            this.setState({
                list: updatedTodos,
            });
        }
    }

    render() {
        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TODO LIST
                </Row>

                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add item . . . "
                                size="lg"
                                value={this.state.userInput}
                                onChange={(e) =>
                                    this.updateInput(e.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="dark"
                                className="mt-2"
                                onClick={() => this.addItem()}
                            >
                                ADD
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {/* map over and print items */}
                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <ListGroup.Item
                                            variant="dark"
                                            action
                                            style={{
                                                display: "flex",
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            {item.value}
                                            <span>
                                                <Button
                                                    style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={() => this.deleteItem(item.id)}
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    variant="light"
                                                    onClick={() => this.editItem(index)}
                                                >
                                                    Edit
                                                </Button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
