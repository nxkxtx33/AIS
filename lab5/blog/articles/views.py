from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from .models import Article

def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})

def get_article(request, article_id):
    post = get_object_or_404(Article, id=article_id)
    return render(request, 'article.html', {"post": post})

@login_required
def create_post(request):
    if request.method == "POST":
        form = {
            'title': request.POST.get('title', ''),
            'text': request.POST.get('text', '')
        }
        if form['title'] and form['text']:
            try:
                article = Article.objects.create(
                    title=form['title'],
                    text=form['text'],
                    author=request.user
                )
                return redirect('get_article', article_id=article.id)
            except IntegrityError:
                form['errors'] = "Статья с таким названием уже существует"
        else:
            form['errors'] = "Не все поля заполнены"
        return render(request, 'create_post.html', {'form': form})
    return render(request, 'create_post.html', {})   