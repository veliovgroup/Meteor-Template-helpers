if(Meteor.isClient){
  Template.demo.helpers({
    array: function(){
      return [1,2,3,4,5,6];
    },
    arrayWithDuplicates: function(){
      return [1,1,2,2,5,5,5];
    }
  });
}