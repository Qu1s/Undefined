from werkzeug.security import generate_password_hash, check_password_hash
from config import DB_LINK, DB_NAME
from app import *
from objects.users import User
import uuid


def DB_add_user(data):
    try:
        if current_user.is_authenticated:
            return jsonify({'status':'Error', 'message':'Пользователь уже авторизован'}), 400

        status = 0
        if len(data['login']) < 3 or len(data['login']) > 20:
            status += 1
        if len(data['password']) < 6 or len(data['password']) > 50:
            status += 2

        if status == 1:
            return jsonify({'status':'Error', 'message':'Логин должен содержать от 3 до 20 символов.'}), 400
        elif status == 2:
            return jsonify({'status':'Error', 'message':'Пароль должен содержать от 6 до 50 символов.'}), 400
        elif status == 3:
            return jsonify({'status':'Error', 'message':'Логин должен содержать от 3 до 20 символов.\nПароль должен содержать от 6 до 50 символов.'}), 400
        else:
            data['password'] = generate_password_hash(data['password'])
            user = User(login=data['login'], password=data['password'], email=data['email']).save()
            login_user(user, remember=True)
            return jsonify({'status':'OK',
                            'user': {'login' : user.login, 
                                     'name'  : user.name,
                                     'email' : user.email}}), 200

    except Exception as e:
        
        if str(e).find('login') > 0:
            return jsonify({'status':'Error', 'message':'Такой логин уже существует.'}), 400
        elif str(e).find('email') > 0:
            return jsonify({'status':'Error', 'message':'Такая почта уже существует.'}), 400
        else:
            return jsonify({'status':'Error', 'message':'Произошла неизвестная ошибка. Попробуйте снова.'}), 400

def DB_login_user(data):
    try:
        if current_user.is_authenticated:
            return jsonify({'status':'Error', 'message':'Пользователь уже авторизован'}), 400

        user = User.objects.get_or_404(login=data['login'])

        if check_password_hash(user.password, data['password']):
            login_user(user, remember=True)
            return jsonify({'status':'OK',
                            'user': {'login' : user.login, 
                                     'name'  : user.name,
                                     'email' : user.email}}), 200
        else:
            return jsonify({'status':'Error', 'message':'Неверный пароль'}), 400

    except Exception as e:
        return jsonify({'status':'Error', 'message':'Пользователь не существует'}), 400

def DB_update_user(data):
    try:
        if current_user.login == data['login']:
            user = User.objects.get_or_404(login=data['login']).update(name=data['name'], email=data['email'])
            if user:
                return jsonify({'status':'OK',
                                    'user': {'login' : data['login'], 
                                            'name'  : data['name'],
                                            'email' : data['email']}}), 200
            else:
                return jsonify({'status':'Error', 'message':'Произошла неизвестная ошибка. Попробуйте снова.'}), 400
        else:
            return jsonify({'status':'Error', 'message':'Невозможно изменить данные другого пользователя'}), 400

    except Exception as e:
        if str(e).find('email') > 0:
            return jsonify({'status':'Error', 'message':'Такая почта уже существует.'}), 400
        return jsonify({'status':'Error', 'message':'Пользователь не существует'}), 400

def DB_get_user(login):
    try:
        return User.objects.get(login=login)
    except:
        return False