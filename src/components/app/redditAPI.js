export default {
    handleOnload: async function(searchTerm){
        try {
            const resp = await fetch(`https://www.reddit.com${searchTerm}hot.json?`);
            const data = await resp.json();
            return data.data.children.map(data_1 => data_1.data);
        } catch (err) {
            return console.log(err);
        }
    },
    getSubreddits: async function(){
        try{
            const resp = await fetch(`http://www.reddit.com/subreddits.json?limit=20`);
            const data = await resp.json();
            return data.data.children.map(data_1 => data_1.data)
        }
        catch(err){
            return console.log(err);
        }
    },
}
