module.exports = {
	hi: function(req,res){
		return res.send("hi");
	},
	bye: function(req,res){
		return res.send("bye");
	},
	inna: function(req,res){
		return res.view("inna");
	}
};
