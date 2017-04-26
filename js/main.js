let compiledHtml = nunjucks.render('../main.html', { foo: 'bar' });
document.getElementById('deposits-container').insertAdjacentHTML('afterend', compiledHtml);