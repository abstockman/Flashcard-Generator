// Creates a BasicCard Constructor
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;

  this.printInfo = function(){
    console.log("Front: " +this.front+"\nBack: "+this.back);
  };
};

module.exports = BasicCard;
