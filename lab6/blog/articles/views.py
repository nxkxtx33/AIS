from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
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

def register(request):
    """Представление для регистрации нового пользователя"""
    if request.method == "POST":
        # Получаем данные из формы
        username = request.POST.get('username', '')
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        password_confirm = request.POST.get('password_confirm', '')
        
        # Валидация данных
        errors = {}
        
        if not username:
            errors['username'] = "Имя пользователя обязательно"
        elif len(username) < 3:
            errors['username'] = "Имя пользователя должно быть не менее 3 символов"
        
        if not email:
            errors['email'] = "Email обязателен"
        
        if not password:
            errors['password'] = "Пароль обязателен"
        elif len(password) < 6:
            errors['password'] = "Пароль должен быть не менее 6 символов"
        
        if password != password_confirm:
            errors['password_confirm'] = "Пароли не совпадают"
        
        # Проверка уникальности имени пользователя
        if not errors.get('username'):
            try:
                User.objects.get(username=username)
                errors['username'] = "Пользователь с таким именем уже существует"
            except User.DoesNotExist:
                pass
        
        # Если нет ошибок, создаем пользователя
        if not errors:
            try:
                user = User.objects.create_user(username, email, password)
                # Сразу авторизуем пользователя после регистрации
                login(request, user)
                return redirect('archive')
            except Exception as e:
                errors['general'] = f"Ошибка при создании пользователя: {str(e)}"
        
        # Возвращаем форму с ошибками
        return render(request, 'register.html', {
            'errors': errors,
            'username': username,
            'email': email
        })
    
    # GET запрос - просто показываем форму
    return render(request, 'register.html')

def login_view(request):
    """Представление для входа пользователя"""
    if request.method == "POST":
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        
        # Аутентификация пользователя
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Если пользователь найден, авторизуем его
            login(request, user)
            # Перенаправляем на страницу, с которой пришел пользователь,
            # или на главную
            next_url = request.GET.get('next', 'archive')
            return redirect(next_url)
        else:
            # Если ошибка аутентификации
            return render(request, 'login.html', {
                'error': "Неверное имя пользователя или пароль",
                'username': username
            })
    
    # GET запрос - показываем форму входа
    return render(request, 'login.html')

def logout_view(request):
    """Представление для выхода пользователя"""
    logout(request)
    return redirect('archive')   