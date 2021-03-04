export default {
    handleOnload: async function(searchTerm){
        try {
            const resp = await fetch(`http://www.reddit.com/search.json?q=${searchTerm}&limit=2`);
            const data = await resp.json();
            return data.data.children.map(data_1 => data_1.data);
        } catch (err) {
            return console.log(err);
        }
    }
}
