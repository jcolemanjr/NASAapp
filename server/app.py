from flask import request
from config import app, db
from models import User, UserMedia, Media




if __name__ == '__main__':
    app.run(port=5555, debug=True)