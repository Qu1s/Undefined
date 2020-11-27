from werkzeug.security import generate_password_hash, check_password_hash
from config import DB_LINK, DB_NAME
from app import *
from objects.users import User
import uuid


def add_user(login, password):
    try:
        password = generate_password_hash(password)
        user = User(login=login, password=password).save()
        login_user(user, remember=True)
        return True

    except:
        return False

def login_user(login, password):
    try:
        user = User.objects.get(login=login)

        if check_password_hash(user.password, password):
            login_user(user, remember=True)
            return user
    except:
        return False

def update_user(name, login, email, password):
    try:
        if current_user.login == login:
            user = User.objects.get(login=login).update_one(name=name, email=email, password=password)
        return True

    except:
        return False

def get_user(login):
    try:
        return User.objects.get(login=login)
    except:
        return False