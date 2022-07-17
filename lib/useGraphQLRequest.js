import { request } from "graphql-request";

const BASE_URL = `https://rickandmortyapi.com/graphql`;

export const BASE_QUERY = `
    query {
      episodes {
        results {
          id
          name
          air_date
          episode
        }
      }
      locations {
        results{
          id
          name
          type
          dimension
        }
      }
    }
  `;

const CHARACTER_QUERY_FIELDS = `
  id
  name
  status
  species
  type
  gender
  origin {
    name
    dimension
  }
  location {
    name
    dimension
  }
  image
`;

export const CHARACTERS_FROM_LOCATION_FILTER = (id) => `
query {
  location (id: ${id}) {
    residents {
      ${CHARACTER_QUERY_FIELDS}
    }
  }
}
`;

export const CHARACTERS_FROM_EPISODE_FILTER = (id) => `
query {
  episode (id: ${id}) {
    characters{
      ${CHARACTER_QUERY_FIELDS}
    }
  }
}
`;

export const CHARACTERS_FROM_DIMENSION_FILTER = (dimension) => `
query {
  locations (filter: {dimension: "${dimension}"}) {
    results{
      residents {
        ${CHARACTER_QUERY_FIELDS}
      }
    }
  }
}
`;

export const fetcher = (query) => request(BASE_URL, query);
