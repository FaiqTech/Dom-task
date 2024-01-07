//*Budur bir təqdim düyməsinə s bir nümunə html faylı. İndi javascript kodu vasitəsilə paraqraf mətninin tərzini dəyişdirin.

function changeStyle() {
  var text = document.getElementById("Text");
  text.style.fontSize = "25px";
  text.style.color = "#7F7FFF";
}
//* 3. Paraqraf fon rəngini təyin etmək üçün JavaScript proqramı yazın.

function changeBackgroundColor() {
  var para3 = document.getElementById("para3");
  para3.style.backgroundColor = "lightblue";
}
//* 4. Budur bir göndərmə düyməsinə sahib bir nümunə HTML faylı. Göstərilən linkin href dəyərini əldə etmək üçün JavaScript funksiyası yazın.

function getAttributes() {
  var a = document.getElementById("coders").href;
  alert("Linkin href atributunun dəyəri: " + a);
}
//* 12. paraqrafın qalın sözlərini, müəyyən bir keçid üzərində siçan üzərində vurğulamaq üçün JavaScript proqramı yazın.
function highlightBoldWords() {
  var text = document.getElementById("Text2");
  var boldWords = text.getElementsByTagName("strong");
  var highlightClass = "highlight";

  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.add(highlightClass);
  }
}
