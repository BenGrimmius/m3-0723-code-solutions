export default function PokemonList({ pokedex }) {
  const list = pokedex.map((pokemon) => (
    <li key={pokemon.number}>
      <b>{pokemon.name}</b>
    </li>
  ));

  return <div>{list}</div>;
}
