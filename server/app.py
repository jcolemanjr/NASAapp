from flask import request, make_response, session
from config import app, db
from models import User, UserMedia, Media

@app.route('/signup', methods=['POST'])
def create_account():
    if request.method == 'POST':
        json = request.get_json()
        user = User(
            username=json['username'],
            password_hash=json['password']
        )
        db.session.add(user)
        db.session.commit()
        return make_response(user.to_dict(), 201)

@app.route('/check_session')
def check_account():
    user = User.query.filter(User.id == session.get('user_id')).first()
    if user:
        user_data = user.to_dict()
        return make_response(user_data,204)
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return make_response({'error': 'Invalid username or password'}, 400)
    
    user= User.query.filter(User.username == username).first()
    if user and user.check_password:
        session['user_id'] = user.id
        return make_response(user.to_dict(),200)
    
    return make_response({'error': 'Invalid username or password'}, 401)

@app.route('/media/<int:id>')
def media_by_id(id):
    user = User.query.get(id)

    if user is None:
        return make_response({'error': 'User not found'}, 404)

    # Find all media associated with the user
    user_media = UserMedia.query.filter_by(user_id=id).all()

    # Create a list to store media information
    media_dict = [media.to_dict() for media in user_media]
    return make_response(media_dict,200)


if __name__ == '__main__':
    app.run(port=5555, debug=True)