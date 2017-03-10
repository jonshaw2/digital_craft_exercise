function Card(points, suits){
  this.point = points;
  this.suit = suits;
}

Card.prototype.getImageUrl = function() {
  if (this.point === 11){
    this.point ="jack";
  }
  else if (this.point === 12){
    this.point ="queen";
  }
  else if (this.point === 13){
    this.point = "king";
  }
  else if (this.point === 1){
    this.point = "ace";
  }
  imageUrl = 'images/' + this.point + '_of_' + this.suit+'.png';
  return imageUrl;
};
