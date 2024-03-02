import { useQuery, gql } from '@apollo/client';

interface Planet {
  id: number;
  name: string;
  rotation: number;
  revolution: number;
  radius: number;
  temperature: number;
  overview_content: string;
  overview_source: string;
  structure_content: string;
  structure_source: string;
  geology_content: string;
  geology_source: string;
}

const GET_PLANETS = gql`
  query GetPlanets {
    planets {
      id
      name
      rotation
      revolution
      radius
      temperature
      overview_content
      overview_source
      structure_content
      structure_source
      geology_content
      geology_source
    }
  }
`;

function MyComponent() {
    const { loading, error, data } = useQuery(GET_PLANETS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      <div>
        {data.planets.map((planet: Planet) => (
  <div key={planet.id}>
    <h2>{planet.name}</h2>
    <p>Rotation: {planet.rotation}</p>
    <p>Revolution: {planet.revolution}</p>
    {/* Добавьте остальные данные о планете */}
  </div>
))}
      </div>
    );
  }

  export default MyComponent;