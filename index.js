const container = document.querySelector(".container");

const callApi = async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
		const data = await response.json();
		data.results.map((pokemon) => {
			const card = document.createElement("div");
			card.classList.add("card");
			container.appendChild(card);

			const cardContent = document.createElement("div");
			cardContent.classList.add("card-content");
			card.appendChild(cardContent);

			const cardH2 = document.createElement("h2");
			cardContent.appendChild(cardH2);
			cardH2.textContent = pokemon.name;

			const cardNumber = document.createElement("span");
			cardContent.appendChild(cardNumber);
			const obtainNumberPokemon = pokemon.url.split("/")[6];
			cardNumber.textContent = `#${obtainNumberPokemon}`;
			const cardImg = document.createElement("img");
			cardContent.appendChild(cardImg);
			const cardP = document.createElement("p");
			cardContent.appendChild(cardP);
		});
	} catch (error) {
		console.log(error);
	}
};
callApi();

const PokemonSprites = async () => {
	try {
		for (pokemonId = 1; pokemonId < 151; pokemonId++) {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
			);
			const data = await response.json();
			console.log(data);
			data.sprites.map((pokemonImg) => {});
		}
	} catch (error) {
		console.log(error);
	}
};

PokemonSprites();
