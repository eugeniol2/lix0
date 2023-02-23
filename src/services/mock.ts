export interface missionDataProps {
  id: number
  emProgresso: boolean
  titulo: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
  horario: string
  tipo: string
  descricao: string
  details: {
    localizacao: string | null
    endereco: string | null
    estacionamento: boolean | null
    coletaemcasa: boolean | null
    contato: string | null
    website: string | null
  }
}

export const data = [
  {
    id: 11111,
    emProgresso: true,
    titulo: 'Descarte de alumínio',
    cep: '111111115',
    localidade: 'Carpina',
    logradouro: 'Apartamento',
    uf: 'PE',
    horario: '8:00 AM - 17:00 PM',
    tipo: 'Descarte',
    descricao:
      'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquemagnam dolores suscipit a ullam odit molestias eos magni qui. Aut.',
    details: {
      localizacao: 'Vila Rica',
      endereco: 'R. Vila Rica, 123 - Goiana, PE, 55900-000,',
      estacionamento: true,
      coletaemcasa: true,
      contato: '(81) 9 2314-1234',
      website: 'www.nereu.com.br'
    }
  },
  {
    id: 22222,
    emProgresso: false,
    titulo: 'Separar o lixo',
    cep: '2222226',
    localidade: 'recife',
    logradouro: 'Casa térreo',
    uf: 'PE',
    horario: '8:00 AM - 17:00 PM',
    tipo: 'Tratamento',
    descricao:
      'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquemagnam dolores suscipit a ullam odit molestias eos magni qui. Aut.',
    details: {
      localizacao: 'Vila Rica',
      endereco: 'R. Vila Rica, 123 - Goiana, PE, 55900-000,',
      estacionamento: false,
      coletaemcasa: true,
      contato: '(81) 9 2314-1234',
      website: 'www.nereu.com.br'
    }
  },
  {
    id: 33333,
    emProgresso: false,
    titulo: 'Consciência verde',
    cep: '3333338333',
    localidade: 'recife',
    logradouro: 'De esquina',
    uf: 'PE',
    horario: '8:00 AM - 17:00 PM',
    tipo: 'Quiz',
    descricao:
      'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquemagnam dolores suscipit a ullam odit molestias eos magni qui. Aut.',
    details: {
      localizacao: null,
      endereco: null,
      estacionamento: null,
      coletaemcasa: null,
      contato: null,
      website: null
    }
  },
  {
    id: 44444,
    emProgresso: false,
    titulo: 'Varrer a rua',
    cep: '3333338333',
    localidade: 'recife',
    logradouro: 'De esquina',
    uf: 'PE',
    horario: '8:00 AM - 17:00 PM',
    tipo: 'Quiz',
    descricao:
      'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquemagnam dolores suscipit a ullam odit molestias eos magni qui. Aut.',
    details: {
      localizacao: null,
      endereco: null,
      estacionamento: null,
      coletaemcasa: null,
      contato: null,
      website: null
    }
  }
]
