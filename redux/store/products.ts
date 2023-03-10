const products = {
  productList: [],
  fetching: false,
  pancake: [
    {
      id: 11,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 70,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 17,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 70,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian', 'pork'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 12,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian', 'beef'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 13,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 14,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 15,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 16,
      name: 'Блинчики с клубникой',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=19yKN_Eeaf6z22IHkMh8tHqcUA_6HK3Pt',
      properties: ['vegeterian'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
  ],
  pelmeniVareniki: [
    {
      id: 21,
      name: 'Пельмени со свининой и говядиной',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=1Xx2psEmqTyfZqeu_0UGAMYvNOopX47SZ',
      properties: ['pork', 'beef'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 22,
      name: 'Пельмени со свининой и говядиной',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=1Xx2psEmqTyfZqeu_0UGAMYvNOopX47SZ',
      properties: ['pork', 'beef'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
    {
      id: 23,
      name: 'Пельмени со свининой и говядиной',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=1Xx2psEmqTyfZqeu_0UGAMYvNOopX47SZ',
      properties: ['pork', 'beef'],
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 10,
        fat: 17,
        ch: 25,
      },
    },
  ],
  meatDishes: [
    {
      id: 331,
      name: 'Чебуреки',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=1ffvQMiVuX8cjEd9mgNvpFgFJLL3jEAEb',
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      properties: ['pork'],
      nutrients: {
        protein: 15,
        fat: 25,
        ch: 5,
      },
    },
    {
      id: 32,
      name: 'Чебуреки',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=1ffvQMiVuX8cjEd9mgNvpFgFJLL3jEAEb',
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 15,
        fat: 25,
        ch: 5,
      },
    },
  ],
  cutlet: [
    {
      id: 41,
      name: 'Котлета куриная',
      weight: 650,
      price: 45,
      img: 'https://drive.google.com/uc?export=view&id=17oQjVafqB42wKpRO2bRc-TlmtLk-iZu8',
      consist:
        'Мука высшего сорта, яйца, сыворотка, клубника, шоколад, соленые огурцы, селедка слабосоленая, черно-пестрая корова.',
      nutrients: {
        protein: 40,
        fat: 25,
        ch: 5,
      },
    },
  ],
};

export default products;
