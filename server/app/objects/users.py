from app import *


class User(UserMixin, db.Document):
    meta = {'collection': 'Users'}
    name = db.StringField(default="Test Testovich")
    login = db.StringField(unique=True, required=True)
    email = db.StringField(unique=True, default="test@mail.ru")
    password = db.StringField(required=True)