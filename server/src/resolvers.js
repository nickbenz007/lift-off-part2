const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForhome();
    },
    tracksForHomeFetch: async () => {
      const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseURL}/tracks`);
      return res.json();
    },
  },

  Tracks: {
    author: async ({ authorId }, _, { dataSources }) => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/author/${authorId}`);
      return res.json();
    },
  },
};

module.exports = resolvers;
