function(settings) {
  var instance = settings.oInstance;
  var table = instance.api();

const characterMaps = [
{
  base: "I", // latin uppercase I, // то что вписываем
  letters: ["04C0","04CF","007C"] // palochka or vertical line // на что заменяем
},
{
  base: "1",
  letters: ["04C0","04CF","007C"]
}

,
{
  base: "!",
  letters: ["04C0","04CF","007C"]
}
];

const replaceSpecificCharacters = function (s) {
  for (let i = 0; i < characterMaps.length; i++) {
    s = s.replace(new RegExp(characterMaps[i].base, 'g'), ConvertToCharFromUnicode(characterMaps[i]));
  }
  return s;
};

// на что мы хотим заменить base, т.е. то, что может быть в инпуте
const ConvertToCharFromUnicode = function (characterMap) {
const letters = characterMap.letters;
//const splitted = letters.split(","); // можно заменить на массив строк в словаре и удалить вот это разделение

const resultAsChars = [];
for (let i = 0; i < letters.length; i++) {
  resultAsChars.push(String.fromCharCode(parseInt(letters[i], 16)));
}
const result = "[" + characterMap.base + resultAsChars.join("") + "]"; // regex собирается здесь // .base позволяет тут искать и по тому символу, что вбивали

return result;
};

var $inputs = instance.parent().find('.form-group input');
$inputs.off('keyup search input').on('keyup', function () {
  
var index = $inputs.index(this); // I turned off rownames; column index starts from 0; if rownames are ON add +1


let keyword = replaceSpecificCharacters($(this).val());
table.column(index).search(keyword, true, false).draw();
});
}
