const baseUrl = "https://lilly-med-static.vercel.app/";

module.exports = {
	data: {
		seo: {
			themeColor: "#204986",
			title: "Lilly Med - Medicina Estética",
			description:
				"Lilly Med é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas.",
			keywords:
				"Lilly Med, medicina estética, alta tecnologia, tratamentos estéticos, preços acessíveis, atendimento personalizado, depilação a laser",
			author: "https://www.lillyestetica.com.br",
			publisher: "https://www.lillyestetica.com.br",
			url: baseUrl,
			favIcon: `${baseUrl}images/favicon.png`,
			ogImage: `${baseUrl}images/og-image.jpg`,
			twitterProfile: "@Lilly_Estetica",
		},
		globalHeader: {
			logo: "/images/logo-lilly-med.svg",
			logoTitle: "Lilly Med",
			logoLink: "/",
			menu: [
				{
					title: "Home",
					href: "/#main-banner",
				},
				{
					title: "Clubes Lilly",
					href: "#clubs-lilly",
				},
				{
					title: "O que procura",
					href: "#o-que-procura",
				},
				{
					title: "Mais vendidos",
					href: "#mais-vendidos",
				},
				{
					title: "Lilly App",
					href: "#lilly-app",
				},
				{
					title: "Tratamentos",
					href: "#tratamentos",
				},
			],
		},
		home: {
			sections: {
				banners: [
					{
						coverMobile: "/images/banners/banner-home-mobile-01.jpg",
						coverDesktop: "/images/banners/banner-home-desktop-01.jpg",
						title: "Um novo conceito em beleza chegou ao JK Iguatemi",
						link: "https://bit.ly/LillyWhatsApp",
					},
				],
				ourClubs: {
					title: "Conheça os nossos clubes",
					description:
						"Descubra o Club de Estética mais completo do Brasil por um preço fixo.",
					type: "card-with-club",
					treatments: [
						{
							cover: "/images/card-club-club.jpg",
							title: "Acesso a mais de 30 tratamentos",
							titleIcon: "/images/icons/icon-club-club.png",
							subtitle: "Peeling das celebridades",
							description:
								"Clube mais versátil da Lilly. Você se associa, paga mensalidades fixas e faz 1 ou 2 sessões por mês de 30 minutos de qualquer* tratamento e ainda tem descontos exclusivos nos outros tratamentos da Lilly.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Conheça o Lilly Club",
						},
						{
							cover: "/images/card-club-boto.jpg",
							title: "Toxina Botulínica",
							titleIcon: "/images/icons/icon-club-boto.png",
							subtitle: "",
							description:
								"No Lilly Boto Club, o cliente se associa, paga mensalidades fixas e aplica toxina botulínica, de primeiríssima qualidade uma ou duas vezes por ano, em uma, duas ou três regiões. São 6 planos de excelente custo benefício!",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Conheça o Boto Club",
						},
						{
							cover: "/images/card-club-laser.jpg",
							title: "Depilação a Laser",
							titleIcon: "/images/icons/icon-club-laser.png",
							subtitle: "",
							description:
								"Clube para depilação a laser definitiva. Os membros pagam uma mensalidade fixa e faz 30 minutos de depilação a laser, nas áreas onde quiser, a cada 45 dias. E mais: descontos exclusivos nos outros tratamentos da Lilly.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Conheça o Laser Club",
						},
					],
				},
				howWeCanHelp: {
					title: "Como podemos te ajudar?",
					description: "Gostaríamos de saber o que te incomoda",
					type: "card-with-background",
					treatments: [
						{
							cover: "/images/cards/card-help-01.png",
							title: "Depilação a Laser",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-02.png",
							title: "Gordura Localizada",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-03.png",
							title: "Toxina Botulínica",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-04.png",
							title: "Ultraformer III",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-05.png",
							title: "Bioestimuladores",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-06.png",
							title: "Rejuvenescimento Facial",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-07.png",
							title: "Rugas",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/cards/card-help-08.png",
							title: "Manchas na Pele",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
					],
				},
				ourTopTreatments: {
					title: "Tratamentos mais procurados",
					description: "Conheça nossos protocolos mais queridos",
					type: "card-default",
					treatments: [
						{
							cover:
								"/images/tratamentos/thumbs-hollywood-peel-peeling-das-celebridades-1.webp",
							title: "Hollywood Peel",
							subtitle: "Peeling das celebridades",
							description:
								"Peeling com Laser Q-Plus Evo e carvão ativado, clareamento da pele, fechamento de poros, tratamento de rugas e sinais de envelhecimento, pele mais firme...",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-remocao-de-tatuagem-1.webp",
							title: "Remoção de Tatuagem",
							subtitle: "Tratamento a laser",
							description:
								"Remoção de Tatuagem com Laser Q-Plus Evo - Última geração de tratamento, sendo o mais recomendado e seguro para a realização do procedimento.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-ultra-papada-1.webp",
							title: "Ultraformer",
							subtitle: "Tratamento da flacidez",
							description:
								"Protocolo Facial Completo. O mais famoso protocolo do Ultraformer, o modo Full Face une protocolos de tratamento de flacidez muscular e tissular, ancoragem muscular e neocolagenese.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover:
								"/images/tratamentos/thumbs-radiancy-body-trate-flacidez-1.webp",
							title: "Radiancy Body",
							subtitle: "Tratamento da flacidez",
							description:
								"Trata a flacidez de pequenas áreas corporais com Laser Q-Plus Evo de até 10cm. Indicado para todos os fototipos, ele atua no aquecimento controlado da pele, induz a produção de colágeno...",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover:
								"/images/tratamentos/thumbs-tratamento-para-melasma-1.webp",
							title: "Tratametno de Melasma",
							subtitle: "Adeus às Manchas",
							description:
								"Tratamento e clareamento com Laser Q-Plus Evo das tão temidas manchas facias, os Melasmas.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-tratamento-de-vasinhos-1.webp",
							title: "Vasinhos (PEIM)",
							subtitle: "Pele linda e sem vasinhos",
							description:
								"O Procedimento Estético Injetável em Microvasos (PEIM), utiliza agulhas finas para injetar substâncias capazes de desobstruir e eliminar os vasinhos.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
					],
				},
				ourTreatments: {
					title: "Nossos Tratamentos",
					description: "Especiais para você",
					type: "card-default",
					treatments: [
						{
							cover: "/images/tratamentos/thumbs-criofrequencia-axilar-1.webp",
							title: "Criofrequência",
							subtitle: "",
							description:
								"Alta tecnologia para diminuição da gordura localizada e flacidez. Áreas para tratamento: Axilar, Abdômen, Flancos, Culotes, Bananinha, Posterior Coxa, Interno de Coxa, Borda Escapular, Braços, Papada, Bochecha, Full Face, Pálpebras, Coxas, Glúteos e Pescoço",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-tratamento-de-por-area-1.webp",
							title: "Criolipólise",
							subtitle: "",
							description:
								"Congele de gordura localizada com Criolipólise de Constraste. Diminuição de medidas, afinamento da silhueta e diminuição de gordura abdominal",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-acne-ativa-1.webp",
							title: "Estrias, cicatrizes, manchas e acne",
							subtitle: "",
							description:
								"Alta tecnologia especial para tratar estrias, lesões pigmentadas, cicatrizes de acne, clarear manchas, cicatrizes, sardas indesejadas e tons avermelhados no rosto",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover:
								"/images/tratamentos/thumbs-radiancy-body-trate-flacidez-1.webp",
							title: "Flacidez",
							subtitle: "",
							description:
								"Trata a flacidez de pequenas áreas corporais com Laser Q-Plus Evo. Indicado para todos os fototipos, ele atua no aquecimento controlado da pele, induz a produção de colágeno, resultando no efeito Lifting da área tratada",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-muscular-1.webp",
							title: "Fortalecimento Muscular",
							subtitle: "",
							description:
								"Alta tecnologia que permite o fortalecimento e tonificação dos músculos, queima de gordura localizada de forma rápida e não invasiva, podendo ser aplicado nos braços, abdômen, flancos, glúteo, coxas e panturrilhas",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover:
								"/images/tratamentos/thumbs-hollywood-peel-peeling-das-celebridades-1.webp",
							title: "Hollywood Peel",
							subtitle: "",
							description:
								"Peeling com Laser Q-Plus Evo e carvão ativado, clareamento da pele, fechamento de poros, tratamento de rugas e sinais de envelhecimento, pele mais firme, melhora do contorno facial",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover:
								"/images/tratamentos/thumbs-tratamento-micose-de-unhas-1.webp",
							title: "Micose de unhas",
							subtitle: "",
							description:
								"Tratamento para Micose de unhas com Laser Q-Plus Evo. Atua com precisão sobre a matriz fúngica da unha, apresentando grande eficácia de resultados, com máxima segurança",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover:
								"/images/tratamentos/thumbs-radiofrequencia-maximus-med-trilipo-corporal-1.webp",
							title: "Radiofrequência",
							subtitle: "",
							description:
								"Única Radiofrequência Tripolar que possui 3 tecnologias para tratar três camadas de pele de uma única vez.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-rejuvenescimento-7d-1.webp",
							title: "Rejuvenescimento",
							subtitle: "",
							description:
								"Alta tecnologia especial para tratar rugas profundas, sinais de envelhecimento, rejuvenescimento dos lábios, olheiras e hiperpigmentações pós inflamatórias com Laser Q-Plus Evo sem cortes.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-remocao-de-tatuagem-1.webp",
							title: "Remoção de Tatuagem",
							subtitle: "",
							description:
								"Remoção de Tatuagem com Laser Q-Plus Evo - Última geração de tratamento, sendo o mais recomendado e seguro para a realização do procedimento",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-ultra-bumbum-up-1.webp",
							title: "Ultraformer",
							subtitle: "",
							description:
								"O melhor Ultrassom Micro e Macrofocado do mundo! O Ultraformer III é a escolha certa para secar a gordura localizada. Cirurgia sem corte",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/tratamentos/thumbs-tratamento-de-vasinhos-1.webp",
							title: "Vasinhos (PEIM)",
							subtitle: "",
							description:
								"O Procedimento Estético Invasivo Mínimo (PEIM), utiliza agulhas finas para injetar substâncias capazes de desobstruir e eliminar os vasinhos.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
					],
				},
			},
		},
	},
};
