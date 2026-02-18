export const CITIES = {
    "sao-paulo": "São Paulo",
    "rio-de-janeiro": "Rio de Janeiro",
    "brasilia": "Brasília",
    "belo-horizonte": "Belo Horizonte",
    "curitiba": "Curitiba",
    "porto-alegre": "Porto Alegre",
    "goiania": "Goiânia",
    "salvador": "Salvador",
    "recife": "Recife",
    "fortaleza": "Fortaleza",
    "florianopolis": "Florianópolis",
    "vitoria": "Vitória",
    // Adicione mais cidades conforme necessidade
};

export type CitySlug = keyof typeof CITIES;
