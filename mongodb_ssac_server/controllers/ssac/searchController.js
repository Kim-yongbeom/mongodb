const client = require("../../modules/elasticModule");

const searchController = {
  search: async (req, res) => {
    const { q } = req.query;
    console.log(q);
    try {
      const result = await client.search({
        index: "post_index",
        body: {
          size: 3,
          query: {
            match: {
              "title.ngram": q,
            },
          },
          highlight: {
            fields: {
              "title.ngram": {},
            },
          },
        },
      });
      const searchResult = result.hits.hits;
      console.log(searchResult);
      const finResult = searchResult.map((item) => {
        console.log(item._source);
        const data = item.highlight["title.ngram"];
        return { title: data, score: item._score };
      });

      res.status(200).json({
        message: "검색 성공",
        data: finResult,
      });
    } catch (error) {
      res.status(500).json({
        message: "ELS 서버 에러",
      });
    }
  },
};

module.exports = searchController;
