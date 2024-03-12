import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ThemeContext} from '../page';

export default function MyCard({ movie }) {

    const theme = useContext(ThemeContext);
    return (
        <Card key={movie?.imdbID} style={{ width: '18rem', padding: '2rem' }} inline className={`card-${theme}`}>
            <Card.Img variant="top" src={movie?.Poster} />
            <Card.Body>
                <Card.Title>{movie?.Title}</Card.Title>
                <Card.Text>
                    {movie?.Plot}
                </Card.Text>
                <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    )
}