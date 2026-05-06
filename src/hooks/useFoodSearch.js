const res = await axios.get(
  "https://world.openfoodfacts.org/cgi/search.pl",
  {
    params: {
      search_terms: query,
      json: 1,
      page_size: 10,
    },
  }
)

const products = res.data.products || []