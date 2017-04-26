let compiledHtml = nunjucks.render('../templates/main.html', { foo: 'bar' });
document.getElementById('deposits-container').insertAdjacentHTML('afterend', compiledHtml);