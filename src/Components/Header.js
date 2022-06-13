import {Navbar} from 'react-bootstrap'


export const Header = () =>{
    return(
        <Navbar bg="dark" variant="light">
            <h2 data-cy="navbar" className="mx-auto text-white">
                Tic Tac Toe
            </h2>
        </Navbar>
    )
}