from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user
from flask import Flask, render_template, request, flash, redirect, url_for, make_response, jsonify
from flask_mongoengine import MongoEngine, Document
from flask_cors import CORS
from config import *


app = Flask(__name__)
app.secret_key = 'app_secret_key'
app.config['MONGODB_SETTINGS'] = {
    'db': DB_NAME,
    'host': DB_LINK
}

db = MongoEngine(app)
login_manager = LoginManager(app)
CORS(app)
