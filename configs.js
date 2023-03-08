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
					href: "/",
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
								"Por mensalidades fixas, você aplica toxina botulínica, de primeiríssima qualidade, uma, duas ou três vezes ao ano, em uma, duas ou três regiões. São 6 planos com excelente custo benefício. Escolha o seu!",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Conheça o Lilly Club",
						},
						{
							cover: "/images/card-club-boto.jpg",
							title: "Toxina Botulínica",
							titleIcon: "/images/icons/icon-club-boto.png",
							subtitle: "",
							description:
								"Por mensalidades fixas, você aplica toxina botulínica, de primeiríssima qualidade, uma, duas ou três vezes ao ano, em uma, duas ou três regiões. São 6 planos com excelente custo benefício. Escolha o seu!",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Conheça o Boto Club",
						},
						{
							cover: "/images/card-club-laser.jpg",
							title: "Depilação a Laser",
							titleIcon: "/images/icons/icon-club-laser.png",
							subtitle: "",
							description:
								"Por mensalidades fixas, você aplica toxina botulínica, de primeiríssima qualidade, uma, duas ou três vezes ao ano, em uma, duas ou três regiões. São 6 planos com excelente custo benefício. Escolha o seu!",
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
							cover: "/images/card-help-gordura-localizada.jpg",
							title: "Gordura Localizada",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/card-help-manchas-na-pele.jpg",
							title: "Manchas na pele",
							subtitle: "",
							description: "",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/card-help-rugas.jpg",
							title: "Rugas",
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
							cover: "/images/card-default-cover.jpg",
							title: "Criofrequência",
							subtitle: "Peeling das celebridades",
							description:
								"Peeling com Laser Q-Plus EVO e carvão ativado, clareamento de pele, fechamento de poros, tratamento de rugas e sinais de envelhecimento.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/card-default-cover.jpg",
							title: "Criolipólise",
							subtitle: "Peeling das celebridades",
							description:
								"Remoção de tatuagens com Laser Q-Switched de última geração. O mais recomendado e seguro para a realização deste procedimento.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/card-default-cover.jpg",
							title: "Criofrequência",
							subtitle: "Peeling das celebridades",
							description:
								"Peeling com Laser Q-Plus EVO e carvão ativado, clareamento de pele, fechamento de poros, tratamento de rugas e sinais de envelhecimento.",
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
							cover: "/images/card-default-cover.jpg",
							title: "Criofrequência",
							subtitle: "Peeling das celebridades",
							description:
								"Peeling com Laser Q-Plus EVO e carvão ativado, clareamento de pele, fechamento de poros, tratamento de rugas e sinais de envelhecimento.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/card-default-cover.jpg",
							title: "Criolipólise",
							subtitle: "Peeling das celebridades",
							description:
								"Remoção de tatuagens com Laser Q-Switched de última geração. O mais recomendado e seguro para a realização deste procedimento.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
						{
							cover: "/images/card-default-cover.jpg",
							title: "Criofrequência",
							subtitle: "Peeling das celebridades",
							description:
								"Peeling com Laser Q-Plus EVO e carvão ativado, clareamento de pele, fechamento de poros, tratamento de rugas e sinais de envelhecimento.",
							link: "https://bit.ly/LillyWhatsApp",
							linkText: "Saiba mais",
						},
					],
				},
			},
		},
	},
};
