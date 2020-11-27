from werkzeug.security import generate_password_hash, check_password_hash
from config import DB_LINK, DB_NAME
from app import *
from objects.users import User
import uuid


def DB_add_user(data):
    try:
        status = 0
        if len(data['login']) < 3 or len(data['login']) > 20:
            status += 1
        if len(data['password']) < 6 or len(data['password']) > 50:
            status += 2

        if status == 1:
            return jsonify({'error': 'Логин должен содержать от 3 до 20 символов.'}), 400
        elif status == 2:
            return jsonify({'error': 'Пароль должен содержать от 6 до 50 символов.'}), 400
        elif status == 3:
            return jsonify({'error': 'Логин должен содержать от 3 до 20 символов.\nПароль должен содержать от 6 до 50 символов.'}), 400
        else:
            data['password'] = generate_password_hash(data['password'])
            user = User(login=data['login'], password=data['password'], email=data['email']).save()
            login_user(user, remember=True)
            return jsonify({'successful': {'login' : user.login, 
                                           'name'  : user.name,
                                           'email' : user.email}}), 200

    except Exception as e:
        
        if str(e).find('login') > 0:
            return jsonify({'error': 'Такой логин уже существует.'}), 400
        elif str(e).find('email') > 0:
            return jsonify({'error': 'Такая почта уже существует.'}), 400
        else:
            return jsonify({'error': 'Произошла неизвестная ошибка. Попробуйте снова.'}), 400

def DB_login_user(login, password):
    try:
        user = User.objects.get(login=login)

        if check_password_hash(user.password, password):
            login_user(user, remember=True)
            return user
    except:
        return False

def DB_update_user(name, login, email, password):
    try:
        if current_user.login == login:
            user = User.objects.get(login=login).update_one(name=name, email=email, password=password)
        return True

    except:
        return False

def DB_get_user(login):
    try:
        return User.objects.get(login=login)
    except:
        return False