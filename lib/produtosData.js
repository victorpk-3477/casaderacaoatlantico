export const brandDescriptions = {
  'Bionatural': 'A ração Bionatural é conhecida por oferecer uma alimentação mais equilibrada e natural para cães e gatos, com fórmulas livres de corantes artificiais e ingredientes selecionados. A marca possui linhas para filhotes, adultos, idosos e animais castrados, focando em saúde intestinal, pelagem bonita e alta digestibilidade. É uma opção muito procurada para quem busca um alimento premium com ótimo custo-benefício.',
  'Fórmula Natural': 'A Fórmula Natural se destaca pela proposta super premium natural, utilizando proteínas de alta qualidade, frutas, vegetais e ingredientes funcionais. Suas linhas incluem opções para cães de pequeno, médio e grande porte, além de versões para gatos, filhotes, castrados, idosos e controle de peso. É uma marca bastante recomendada para pets com sensibilidade alimentar.',
  'N&D': 'A N&D é uma linha super premium reconhecida pela composição rica em carnes nobres e baixo índice de carboidratos. Possui linhas como Prime, Pumpkin, Quinoa, Ocean e Ancestral Grain, com fórmulas específicas para diferentes portes, idades e necessidades especiais. É uma das marcas mais sofisticadas do mercado pet.',
  'PremieR': 'A PremieR é uma das marcas mais tradicionais do Brasil no segmento premium especial. Oferece linhas como PremieR Formula, Seleção Natural, Nutrição Clínica e Raças Específicas, atendendo cães e gatos de todos os portes e fases da vida. A marca se diferencia pela variedade de opções e foco em nutrição de alta performance.',
  'PremieR Nattu': 'A PremieR Nattu é a linha natural da PremieR, produzida sem corantes e conservantes artificiais. Suas fórmulas combinam proteínas selecionadas com vegetais e ingredientes naturais, oferecendo uma alimentação mais saudável para cães adultos e filhotes. É indicada para tutores que buscam um conceito mais natural sem abrir mão da qualidade premium.',
  "Hill's": "A Hill's é uma marca mundialmente famosa pela forte atuação em nutrição veterinária e terapêutica. Suas principais linhas incluem Science Diet, Prescription Diet e Bioactive Recipe, voltadas para saúde digestiva, renal, controle de peso, alergias e diversas condições clínicas. É muito recomendada por veterinários.",
  'Finotrato': 'A Finotrato oferece rações premium com foco em alta palatabilidade e nutrição equilibrada. A marca possui linhas para cães e gatos, incluindo versões para filhotes, adultos e animais castrados. É bastante conhecida pelo excelente custo-benefício dentro da categoria premium.',
  'Special Cat': 'A Special Cat é especializada em alimentação para gatos, oferecendo opções para filhotes, adultos, castrados e controle urinário. A marca se destaca pela preocupação com saúde do trato urinário, redução do odor das fezes e ótima aceitação pelos felinos.',
  'Special dog': 'A Special Dog é uma marca tradicional voltada para cães, com linhas Standard, Premium e Ultralife. Possui opções para filhotes, adultos, idosos e diferentes portes. É conhecida pela boa relação entre qualidade e preço, sendo bastante popular no mercado brasileiro.',
  'VittA Natural': 'A Vitta Natural aposta em uma nutrição mais natural e equilibrada, com ingredientes selecionados e foco na saúde intestinal e da pelagem. Possui linhas para cães e gatos em diversas fases da vida, oferecendo opções premium com ótima digestibilidade.',
  'Origens': 'A Origens é uma marca premium especial produzida pela Adimax, conhecida pela qualidade nutricional e ótimo rendimento. Possui linhas para cães e gatos, incluindo versões para filhotes, castrados, indoor e diferentes portes. A marca se destaca pelo equilíbrio entre nutrição e custo-benefício.',
  'GoldeN': 'A GoldeN é uma das marcas premium mais populares do Brasil, oferecendo grande variedade de produtos para cães e gatos. Suas linhas incluem GoldeN Fórmula, Seleção Natural, Mega e Special Cats, atendendo filhotes, adultos, idosos e castrados. É conhecida pela alta aceitação e excelente custo-benefício.',
  'Magnus': 'A Magnus é uma marca bastante forte no segmento premium e premium especial, oferecendo linhas como Magnus Todo Dia, Premium e Original. As fórmulas são voltadas para energia, saúde intestinal e manutenção da pelagem, sendo muito procuradas por quem busca economia sem abrir mão da qualidade.',
  'Besser': 'A Besser oferece rações com foco em nutrição equilibrada e bom rendimento diário. A marca possui opções para cães adultos, filhotes e diferentes portes, sendo reconhecida pelo custo acessível e boa aceitação pelos pets.',
};

export const brands = [

  { id: 2, name: "Bionatural", folder: "Bionatural", logo: "/Produtos/Marca/Bionatural.png" },
  { id: 1, name: "Fórmula Natural", folder: "Fórmula Natural", logo: "/Produtos/Marca/formlanatural.png" },
  { id: 7, name: "N&D", folder: "N&D", logo: "/Produtos/Marca/n&d.png" },
  { id: 9, name: "PremieR", folder: "PremieR", logo: "/Produtos/Marca/Premier.png" },
  { id: 10, name: "PremieR Nattu", folder: "PremieR_Nattu", logo: "/Produtos/Marca/PremieR_Nattu.png" },
  { id: 14, name: "Hill's", folder: "Hill's", logo: "/Produtos/Marca/hills.avif" },
  { id: 3, name: "Finotrato", folder: "Finotrato", logo: "/Produtos/Marca/Finotrato.png" },
  { id: 11, name: "Special Cat", folder: "special Cat", logo: "/Produtos/Marca/SpecialCat.png" },
  { id: 12, name: "Special dog", folder: "Special dog", logo: "/Produtos/Marca/SpecialDog.png" },
  { id: 13, name: "VittA Natural", folder: "VittA_Natural", logo: "/Produtos/Marca/VittA_Natural.png" },
  { id: 8, name: "Origens", folder: "Origens", logo: "/Produtos/Marca/ORIGENS.png" },
  { id: 5, name: "GoldeN", folder: "GoldeN", logo: "/Produtos/Marca/golden.png" },
  { id: 6, name: "Magnus", folder: "Magnus", logo: "/Produtos/Marca/MAGNUS.png" },
  { id: 4, name: "Besser", folder: "Besser", logo: "/Produtos/Marca/Besser.png" }
];

export function getBrandSlug(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getBrandBySlug(slug) {
  return brands.find((brand) => getBrandSlug(brand.name) === slug);
}

