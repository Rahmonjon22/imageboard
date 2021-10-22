
const postReducer = (post = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return posts;
        case "CREATE":
            return posts;

        default:
            return posts;
    }
};

export default postReducer;
app.post("/index/:id", function(req,res){
    TestData.findById(req.params.id, function(err, theUser){
        if(err){
            console.log(err);
        } else {
            theUser.likes += 1;
            theUser.save();
            console.log(theUser.likes);
        }
    });
});

app.post("/index/:id", function(req,res){
    TestData.findById(req.params.id, function(err, theUser){
        if(err){
            console.log(err);
            return res.status(500).send('Something went wrong!'); // You should notify user about any error    
        } else {
            theUser.likes += 1;
            theUser.save(function(err){
            if(err) return res.status(500).send('Something went wrong!');
            return res.send({likes_count: theUser.likes});
            });
  
        }
    });
  });