import axios from "axios";

export const newEpsList = async (page = 1) => {
	const { data } = await axios.get(
		`https://api.consumet.org/anime/gogoanime/recent-episodes?page=${page}`
	);
	return data;
};
export const getStreamLink = async (id) => {
	const { data } = await axios.get(`https://api.consumet.org/anime/gogoanime/servers/${id}`);
	return data;
};

export const getRecentAnime = async (page = 1) => {
	const { data } = await axios.get(`https://api.consumet.org/meta/anilist/trending?page=${page}`);
	return data;
};

export const getPopularAnime = async (page = 1) => {
	const { data } = await axios.get(`https://api.consumet.org/meta/anilist/popular?page=${page}`);
	return data;
};

export const getAnime = async (id) => {
	const { data } = await axios.get(`https://api.consumet.org/meta/anilist/info/${id}`);
	return data;
};
