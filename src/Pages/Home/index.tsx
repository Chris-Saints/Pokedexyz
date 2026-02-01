import { useEffect, useState } from "react";
import { Pokemoncard } from "../../components/PokemonCard";
import { fetchCardPokemon} from "../../services/pokemonListService";
import { ButtonGeneration, CardContainer, MainHomeContainer, FilterButtonContainer, FilterContainer, InputContainer, ButtonMoreLoad, LoadImage } from "./home.styles";
import { ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import  Pokebola  from "../../assets/Poké_Ball_icon.png"
import { Link } from "react-router-dom";
import type { PokemonCardBase } from "../../types/pokemonCardType";

export function Home() {

    const [pokemons, setPokemons] = useState<PokemonCardBase[]>([])

    const [generation, setGeneration] = useState<number>(0)

    const [loading, setLoading] = useState(false);

    const [offset, setOffset] = useState(0);

    const [max, setMax] = useState(1025);

    const limit = 50

    //Objeto que guarda as informações de geração e o numero do primeiro e do ultimo pokemon de cada geração

    const generationArray: Record<number, [number, number]> = {
        1: [0, 151],
        2: [151, 251],
        3: [251, 386],
        4: [386, 493],
        5: [493, 649],
        6: [649, 721],
        7: [721, 809],
        8: [809, 905],
        9: [905, 1025],
    }

    const [start, end] = generation === 0 ? [0, 1025] : generationArray[generation]

    const diference = end - start

    //UseEffect de renderização inicial da pagina. carrega 50 pokemons iniciais

    useEffect(() => {
        async function fetchPokemons(){
            try {
                setLoading(true)
                
                const fetchDetailedPokemons: PokemonCardBase[] = await fetchCardPokemon(limit, offset) 

                setPokemons(fetchDetailedPokemons)

                
                setOffset(50)

                
            } finally {
                setLoading(false)

                
            }
        }
        fetchPokemons()
        
    }, [])

    //Função do botão carregar mais. a pagina so carrega 50 pokemons por vez. e carrega mais 50 clicando nesse botão até chegar no limite de pokemons da geração ou total

    async function handleLoadMorePokemons() {
        if(offset >= max) return
        setLoading(true)


        if(start === 0 && end === 1025) {

            const newPokemons = await fetchCardPokemon(limit, offset);
            const newFilteredPokemon = newPokemons.filter(( pokemon ) => pokemon.id <= end)

            setPokemons(prev => [...prev, ...newFilteredPokemon]);

            setOffset(prev => prev + limit)
        }

        if(generation > 0) {


            const newLimit = diference - pokemons.length ;
            

            if(newLimit <= 50) {
                const newPokemons = await fetchCardPokemon(newLimit, offset);

                setPokemons(prev => [...prev, ...newPokemons]);
            } else {
                const newPokemons = await fetchCardPokemon(limit, offset)

                setPokemons(prev => [...prev, ...newPokemons]);
            }


            setOffset(prev => prev + limit)

        }
    

        setLoading(false)
    }

    //Função que faz a seleção de geração para o filtro. apaga toda a array e faz uma nova a partir de certos numeros

    async function selectGeneration(gen: number){
        setLoading(true)

        setGeneration(gen)
        setPokemons([]);

        const [start, end] = gen === 0 ? [0, 1025] : generationArray[gen] 

        setOffset(start);
        setMax(end);


        const newPokemons = await fetchCardPokemon(limit, start);

        setPokemons(prev => [...prev, ...newPokemons]);

            
        setOffset(prev => prev + limit)

        
        

        setLoading(false)


    }
    
     

    return(
        <MainHomeContainer>

            <FilterContainer>
                <InputContainer>
                    <input placeholder="Digite o nome ou a ID do pokemon" type="text"/>
                    <button><MagnifyingGlassIcon size={30} color="#f1f1f1"/></button>
                </InputContainer>


                <FilterButtonContainer>
                    <ButtonGeneration filter={0} onClick ={() => selectGeneration(0)}><ListIcon weight={"bold"} size={20}/></ButtonGeneration>
                    <ButtonGeneration filter={1} onClick ={() => selectGeneration(1)}>1</ButtonGeneration>
                    <ButtonGeneration filter={2} onClick ={() => selectGeneration(2)}>2</ButtonGeneration>
                    <ButtonGeneration filter={3} onClick ={() => selectGeneration(3)}>3</ButtonGeneration>
                    <ButtonGeneration filter={4} onClick ={() => selectGeneration(4)}>4</ButtonGeneration>
                    <ButtonGeneration filter={5} onClick ={() => selectGeneration(5)}>5</ButtonGeneration>
                    <ButtonGeneration filter={6} onClick ={() => selectGeneration(6)}>6</ButtonGeneration>
                    <ButtonGeneration filter={7} onClick ={() => selectGeneration(7)}>7</ButtonGeneration>
                    <ButtonGeneration filter={8} onClick ={() => selectGeneration(8)}>8</ButtonGeneration>
                    <ButtonGeneration filter={9} onClick ={() => selectGeneration(9)}>9</ButtonGeneration>
                </FilterButtonContainer>
            </FilterContainer>

            <CardContainer>
                {pokemons && pokemons.map((pokemon) => { //Ele verifica se existe algo dentro de pokemons e se tiver ele passa por todos os itens e renderiza todos
                // Aqui ele não estava renderizando, mas funcionou quando coloquei o return
                    return <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} >
                                <Pokemoncard 
                                    pokemon={pokemon}
                                />  
                            </Link>
                })} 
            </CardContainer>
            

            {loading && loading ?
                <LoadImage src={Pokebola} alt="Pokebola" /> : 
                pokemons.length < diference ?
                <ButtonMoreLoad onClick={handleLoadMorePokemons}>Carregar Mais...</ButtonMoreLoad> :
                <div></div>}

        </MainHomeContainer>
    )
}


//Fazer a pagina dos pokemons

//Fazer input de pesquisa para nome e id.

//Consertar o limite do array de pokemons das gerações 2 em diante e talvez da 0 tbm