import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormNavBar({ handleSearchInput, value, theme, setTheme }) {
    const handleChangeTheme = (event) => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    return (
        <Navbar className={`theme-${theme == 'light' ? 'light' : 'dark'}  justify-content-between`}>
            <Form >
                <InputGroup>
                    <InputGroup.Text id="basic-addon1">Movie Title</InputGroup.Text>
                    <Form.Control
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="basic-addon1"
                        onChange={handleSearchInput}
                        value={value}
                    />
                </InputGroup>
            </Form>
            {theme == 'light' ? (<Button variant="dark" onClick={handleChangeTheme}>Dark</Button>) : (<Button variant="light" onClick={handleChangeTheme}>Light</Button>)}
        </Navbar>
    );
}