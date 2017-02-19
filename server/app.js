let model = {
  random: function(k,die){
    var value =  Math.floor((Math.random()*6)+1)
    $(die).text(value)
  }
}

let view = {
  roll: function() {
    $('#roller button.add').on('click', controller.add)
    $('#roller button.roll').on('click', controller.dice)
  }
}

let controller = {
  add: function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>')
  },

  dice: function() {
    $('.die').each(model.random)
  }
}
$(document).ready(view.roll)
