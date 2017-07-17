var ClozeCard = function(text, cloze) {
  this.fullText = text;
  this.cloze = cloze;
  this.partial = this.fullText.replace(cloze, "...");

  this.printInfo = function(){
    console.log(this.partial);
  }
};

module.exports = ClozeCard;
