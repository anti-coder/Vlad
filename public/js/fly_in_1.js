let paragraph1 = document.getElementsByTagName('p')[1];

function textEffect(animationName) {
  let text = paragraph1.innerHTML,
    chars = text.length,
    newText = '',
    animation = animationName,
    char,
    i;

  for (i = 0; i < chars; i += 1) {
    newText += '<i>' + text.charAt(i) + '</i>';
  }

  paragraph1.innerHTML = newText;

  let wrappedChars = document.getElementsByTagName('i'),
    wrappedCharsLen = wrappedChars.length,
    j = 0;

  function addEffect () {
    setTimeout(function () {
      wrappedChars[j].className = animation;
      j += 1;
      if (j < wrappedCharsLen) {
        addEffect();
      }
    }, 100)
  }

  addEffect();
};

textEffect('fly-in-out');