import { Link } from 'react-router-dom'
import PokemonLogo from '../../assets/International_Pokémon_logo.png'
import { ButtonNavContainer, HeaderContainer, NavContainer } from './header.styles'

export function Header() {
    return (
        <HeaderContainer>
            
            <img src={PokemonLogo} alt='Pokemon Logo' />

            <NavContainer>

                <Link to="/"><ButtonNavContainer>Home</ButtonNavContainer></Link>

                <Link to="/berries"> <ButtonNavContainer>Berries</ButtonNavContainer> </Link>

                <Link to="/items"><ButtonNavContainer>Items</ButtonNavContainer> </Link>

            </NavContainer>

        </HeaderContainer>
    )
}