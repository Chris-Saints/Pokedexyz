import PokemonLogo from '../../../public/International_Pokémon_logo.svg.png'
import { ButtonNavContainer, HeaderContainer, NavContainer } from './header.styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={PokemonLogo} alt='Pokemon Logo' />
            <NavContainer>
                <ButtonNavContainer>Pokedex</ButtonNavContainer>
                <ButtonNavContainer>Berries</ButtonNavContainer>
                <ButtonNavContainer>Items</ButtonNavContainer>
            </NavContainer>
        </HeaderContainer>
    )
}