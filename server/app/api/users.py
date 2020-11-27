from app import *
from db_cruder import *

@app.route('/api/user/add', methods=['POST'])
def api_add_user():
    data = request.json
    result = DB_add_user(data)
    return result

@app.route('/api/user/login', methods=['POST'])
def api_login_user():
    data = request.json
    result = DB_login_user(data)
    return result

@app.route('/api/user/update', methods=['POST'])
def api_update_user():
    data = request.json
    result = DB_update_user(data)
    return result

@app.route('/api/user/get', methods=['GET'])
def api_get_user():
    data = dict(request.args)
    result = DB_get_user(data)
    return result