function speakWithAI() {
  do {
    const question = prompt('Что бы вы хотели узнать?');

    if (question.endsWith('?')) {
      if (question.startsWith('Как мне')) {
        alert('Подумать и сделать');
        continue;
      }

      if (question.startsWith('Где найти')) {
        alert('В гугле');
        continue;
      }

      alert('Не знаю');
    } else {
      alert('Это непохоже на вопрос...');
    }
  } while (confirm('Продолжить?'));

  alert('ИИ устал и ушёл спать(закончил работу)');

  return;
}
