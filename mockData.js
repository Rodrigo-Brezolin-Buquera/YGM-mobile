export const mockClasses = [
    {
        capacity: 16,
        date: "18/08/2023",
        day: "Segunda",
        groupId: "2023-06-16-17:56-Hatha",
        id: "JYnMJsfqi8c9VF1fNcan",
        name: "Hatha",
        teacher: "Rodrigo",
        time: "17:56"
    },
    {
        capacity: 0,
        date: "18/08/2023",
        day: "Terça",
        groupId: "2023-06-16-17:56-Hatha",
        id: "JYnMJsfqi8c9VF1fNcan2",
        name: "Hatha",
        teacher: "Rodrigo",
        time: "17:56"
    },
    {
        capacity: 16,
        date: "21/08/2023",
        day: "Terça",
        groupId: "2023-06-16-17:56-Hatha",
        id: "JYnMJsfqi8c9VF1fNca22n",
        name: "Hatha",
        teacher: "Rodrigo",
        time: "18:56"
    },
]

export const mockContracts = [
    {
        availableClasses: null,
        ends:  null,
        id: "HfyQMsz00UbILrh9tPHzwytoRqc2",
        name: "Rodrigo Brezolin",
        plan: "Gympass",
        started: "17/06/2023"
    },
    {
        availableClasses: 2,
        ends: "17/06/2023",
        id: "MtblzYHeisbqkrOj2xG068be5wn22",
        name: "Louize baya",
        plan: "1x-Mensal",
        started: "17/06/2023"
    },
    {
        availableClasses: null,
        ends: null,
        id: "MtblzYHeisbqkrOj2xG068be5wn2222",
        name: "Louize ",
        plan: "Gympass",
        started: "17/06/2023"
    }

]

export const mockUsers = [
    {
        active: true,
        admin: false,
        email: "RODRIGOBBUQUERA@GMAIL.COM",
        id: "HfyQMsz00UbILrh9tPHzwytoRqc2",
        name: "Rodrigo Brezolin",
        createdAt: "17/06/2023"
    },
    {
        active: true,
        admin: false,
        email: "RODRIGOBBUQUERA@GMAIL.COM",
        id: "MtblzYHeisbqkrOj2xG068be5wn22",
        name: "Louize baya",
        createdAt: "17/06/2023"

    },
    {
        active: false,
        admin: false,
        email: "RODRIGOBBUQUERA@GMAIL.COM",
        id: "MtblzYHeisbqkrOj2xG068be5wn2222",
        name: "Louize",
        createdAt: "17/06/2023"

    }

]
export const mockLocal = {
    id: "main",
    address: "Rua Luiz Silva Rodrigues, 299 Vila Independência - Sorocaba/SP",
    email: "contato@yogamangala.com.br",
    phone: "(15) 98130-2549",
    whatsapp: "5515981302549",
    maxCapacity: "16",
    website: "https://yogamangala.com.br/",
    facebook: "yogamangalasorocaba",
    instagram: "yoga_mangala",
  };


export const mockStyles = [
  { name: 'Hatha', id: '7RuNSX0A47dM0azokEbs' },
  { name: 'Restaurativo', id: 'VuU2h0TQbKdic61tj8cP' },
  { name: 'Vinyasa Flow', id: 'bmwyRZrE0ApatmbRURnG' }
];


export const mockTeachers = [
     { name: 'Rodrigo', id: '0ARvEwLLdkz1aDFRev3F' },
     { name: 'Louize', id: 'ey6DPNnaOaAG1LvTrvmb' }
]

export const mockPlans = [
    {
      availableClasses: 4,
      durationInMonths: 1,
      frequency: '1x',
      type: 'Mensal',
      id: '1x-Mensal',
      price: "R$ 50,00",
    },
    {
      durationInMonths: 3,
      availableClasses: 12,
      type: 'Trimestral',
      frequency: '1x',
      id: '1x-Trimestral',
      price: "R$ 120,00",
    },
    {
      durationInMonths: 1,
      availableClasses: 8,
      type: 'Mensal',
      frequency: '2x',
      id: '2x-Mensal',
      price: "R$ 80,00",
    },
    {
      durationInMonths: 6,
      availableClasses: 48,
      type: 'Semestral',
      frequency: '2x',
      id: '2x-Semestral',
      price: "R$ 300,00",
    },
    {
      durationInMonths: 3,
      availableClasses: 24,
      type: 'Trimestral',
      frequency: '2x',
      id: '2x-Trimestral',
      price: "R$ 150,00",
    },
    {
      id: 'Avulso',
      type: 'Avulso',
      price: "R$ 20,00",
    },
    {
      id: 'Gympass',
      type: 'Gympass',
    
    },
    {
      id: 'TotalPass',
      type: 'TotalPass',
   
    },
  ];
  

  export const mockCheckins = [
     {
      id: "13E5w8oKl2U6MUUnC8tHadEaDjh1+5lxRhGcp3INshOdhSddV",
      contractId: "13E5w8oKl2U6MUUnC8tHadEaDjh1",
      date: "08/07/2023",
      name: "Stefanie",
      time: "09:00",
      yogaClassId: "5lxRhGcp3INshOdhSddV"
    },
    {
      id: "13E5w8oKl2U6MUUnC8tHadEaDjh1+5lxRhGcp3INshOdhSddV1",
      contractId: "13E5w8oKl2U6MUUnC8tHadEaDjh1",
      date: "08/07/2023",
      name: "Pedro S. Marcos da Cruz",
      time: "09:00",
      yogaClassId: "5lxRhGcp3INshOdhSddV"
    }
    
  
  ]
  