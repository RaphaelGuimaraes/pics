import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: 'Client-ID hilJ-10feEzd_V-2de3PdWmGNPFPeiUb1jFFnLfmhno'
	}
});
