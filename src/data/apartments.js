// Dados dos apartamentos. Valores sao sempre "sob consulta".

export const CONTACT = {
  whatsappDisplay: '(55) 99975-0085',
  whatsappNumber: '5555999750085', // formato internacional p/ wa.me
  instagramHandle: '@alziraritter',
  instagramUrl: 'https://www.instagram.com/alziraritter/',
  facebookUrl: 'https://www.facebook.com/marketplace/profile/100004018727756/',
}

export function whatsappLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`
}

export const APARTMENTS = [
  {
    id: 'florenca',
    name: 'Residencial Florença',
    unit: 'Apto 402',
    ref: 'REF. 402',
    tagline: 'Conforto à beira-mar com suíte e elevador',
    address: 'Rua Guaraci, 1535 — Capão da Canoa/RS',
    mapsQuery: 'Rua Guaraci, 1535, Capão da Canoa - RS',
    intro:
      'Desfrute da vida à beira-mar! Este apartamento fica a poucos passos da praia e próximo à Praça Flávio Boianovski, com fácil acesso a comércio e serviços. Ambientes arejados, iluminados e bem cuidados para a sua temporada de verão.',
    highlights: [
      { icon: 'BedDouble', label: '2 dormitórios', detail: 'sendo 1 suíte' },
      { icon: 'Bath', label: '2 banheiros', detail: 'social amplo + suíte' },
      { icon: 'Car', label: 'Vaga de garagem', detail: 'privativa' },
      { icon: 'Building2', label: 'Prédio com elevador', detail: 'acessível' },
    ],
    amenities: [
      'Suíte aconchegante',
      'Sala de estar ampla e iluminada',
      'Cozinha equipada',
      'Varanda com brisa do mar',
      'Ar-condicionado',
      'Internet',
      'TV Smart',
      'Churrasqueira',
      'Área comum bem cuidada',
    ],
    differentials: [
      'A poucos passos da praia',
      'Próximo a supermercados, restaurantes e lazer',
      'Ambientes arejados e iluminados',
    ],
    cover: '/cover/cover-florenca.jpg',
    photos: [
      { src: '/img/florenca/01-sacada.jpg', caption: 'Sacada com vista' },
      { src: '/img/florenca/02-sala-estar.jpg', caption: 'Sala de estar e jantar' },
      { src: '/img/florenca/03-sala-tv.jpg', caption: 'Sala de TV' },
      { src: '/img/florenca/04-suite.jpg', caption: 'Suíte com banheiro privativo' },
      { src: '/img/florenca/05-quarto2.jpg', caption: 'Segundo dormitório' },
      { src: '/img/florenca/06-cozinha.jpg', caption: 'Cozinha equipada' },
      { src: '/img/florenca/07-lavanderia.jpg', caption: 'Lavanderia' },
      { src: '/img/florenca/08-banheiro-suite.jpg', caption: 'Banheiro da suíte' },
      { src: '/img/florenca/09-banheiro-social.jpg', caption: 'Banheiro social' },
    ],
  },
  {
    id: 'andorinha',
    name: 'Edifício Andorinha',
    unit: 'Apto 22',
    ref: 'REF. 22',
    tagline: 'Espaçoso, acessível e a duas quadras do mar',
    address: 'Rua Sepé, 1542 — Capão da Canoa/RS',
    mapsQuery: 'Rua Sepé, 1542, Capão da Canoa - RS',
    intro:
      'Aproveite a proximidade da praia e do centro da cidade! Situado em área tranquila, a duas quadras do mar e a uma quadra da Praça Flávio Boianovski. Perfeito para quem busca conforto, espaço e praticidade para toda a família.',
    highlights: [
      { icon: 'BedDouble', label: '2 dormitórios', detail: '+ dependência' },
      { icon: 'Bath', label: '2 banheiros', detail: 'com barras de apoio' },
      { icon: 'Car', label: 'Vaga de garagem', detail: 'privativa' },
      { icon: 'Accessibility', label: 'Acessibilidade', detail: 'barras para idosos' },
    ],
    amenities: [
      'Dois dormitórios espaçosos',
      'Dependência com beliche e banheiro',
      'Sala ampla',
      'Cozinha equipada',
      'Banheiro com barras de apoio',
      'Ar-condicionado',
      'Ventilador de teto',
      'Internet',
      'TV Smart',
      'Churrasqueira',
    ],
    differentials: [
      'Duas quadras do mar',
      'Uma quadra da Praça Flávio Boianovski',
      'Varanda com vista para a rua',
      'Prédio seguro e bem cuidado',
      'Próximo a supermercados, restaurantes e comércio',
    ],
    cover: '/cover/cover-andorinha.jpg',
    photos: [
      { src: '/img/andorinha/01-sacada.jpg', caption: 'Sacada com vista para a rua' },
      { src: '/img/andorinha/02-sala-jantar.jpg', caption: 'Sala de jantar' },
      { src: '/img/andorinha/03-sala-estar.jpg', caption: 'Sala de estar' },
      { src: '/img/andorinha/04-quarto1.jpg', caption: 'Dormitório 1 (casal)' },
      { src: '/img/andorinha/05-quarto2.jpg', caption: 'Dormitório 2 (casal)' },
      { src: '/img/andorinha/06-dependencia.jpg', caption: 'Dependência com beliche' },
      { src: '/img/andorinha/07-cozinha.jpg', caption: 'Cozinha' },
      { src: '/img/andorinha/08-lavanderia.jpg', caption: 'Lavanderia' },
      { src: '/img/andorinha/09-churrasqueira.jpg', caption: 'Espaço da churrasqueira' },
      { src: '/img/andorinha/10-banheiro-social.jpg', caption: 'Banheiro social' },
      { src: '/img/andorinha/11-banheiro-dependencia.jpg', caption: 'Banheiro da dependência' },
    ],
  },
]
