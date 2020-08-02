import userData from "../userData"

console.log(userData);

const createPaginationMarkup = () => {
    const totalProdacts = userData.getAllProducts().length;
}


async getProductsWithPagination(PerPage, page = 1, category) {
    try {
        const response = await axios.get(`https://goit-store.herokuapp.com/products?itemsPerPage=${PerPage}&page=${page}&category=${category}`);
        console.log(response)

        return response
    } catch (err) {
        throw new Error(err);
    }
}
