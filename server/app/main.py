from app import *
import os
from views import index, p404
from api import users


if __name__ == "__main__":
	app.run(debug=True, host="0.0.0.0", port=5000)