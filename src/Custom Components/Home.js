import Button from 'react-bootstrap/Button';

const Home = () => {

    const handleClick = (name, e) => {
        console.log('Hello! ' + name + e.target);
    }

    return ( 
        <div>
            <Button onClick={ (e) => handleClick('Mario', e) } variant="primary">Hello!</Button>
        </div>
     );
}
 
export default Home;


