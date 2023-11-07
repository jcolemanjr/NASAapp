from flask import request, make_response, session, jsonify, abort
from werkzeug.exceptions import HTTPException
from config import app, db
from models import User, UserMedia, Media
import requests

@app.route('/signup', methods=['POST'])
def create_account():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        response = make_response(
            {'error': 'Missing username or password'},
            400
        )
        return response

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        response = make_response(
            {'error': 'Username already exists'},
            400
        )
        return response

    user = User(username=username)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    response = make_response(
        user.to_dict(),
        201
    )
    return response

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        response = make_response(
            {'error': 'Missing username or password'},
            400
        )
        return response
    
    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        session['user_id'] = user.id
        response = make_response(
            {'message': 'Login successful', 'user': user.to_dict()},
            200
        )
        return response
    else:
        response = make_response(
            {'error': 'Invalid username or password'},
            401
        )
        return response

@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)
    response = make_response(
        {'message': 'Logged out successfully'},
        200
    )
    return response

@app.route('/delete_account', methods=['DELETE'])
def delete_account():
    user_id = session.get('user_id')
    if not user_id:
        response = make_response(
            {'error': 'You must be logged in'},
            401
        )
        return response
    
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        session.pop('user_id', None)
        response = make_response(
            {'message': 'Account deleted successfully'},
            200
        )
        return response
    else:
        response = make_response(
            {'error': 'User not found'},
            404
        )
        return response

@app.route('/change_password', methods=['PATCH'])
def change_password():
    user_id = session.get('user_id')
    if not user_id:
        response = make_response(
            {'error': 'You must be logged in to change password'},
            401
        )
        return response

    data = request.get_json()
    new_password = data.get('new_password')
    if not new_password:
        response = make_response(
            {'error': 'New password is required'},
            400
        )
        return response
    
    user = User.query.get(user_id)
    if user:
        user.set_password(new_password)
        db.session.commit()
        response = make_response(
            {'message': 'Password changed successfully'},
            200
        )
        return response
    else:
        response = make_response(
            {'error': 'User not found'},
            404
        )
        return response

@app.route('/media', methods=['GET'])
def media_gallery():
    medias = Media.query.all()
    if medias:
        media_dict=[media.to_dict() for media in medias]
        response = make_response(
            media_dict,
            200
        )
        return response
    else:
        response = make_response(
            {'error': 'Failed to fetch media from NASA APOD'},404
        )
        return response

@app.route('/personal_gallery', methods=['GET'])
def personal_gallery():
    user_id = session.get('user_id')
    if not user_id:
        response = make_response(
            {'error': 'Not logged in'},
            401
        )
        return response
    
    user_medias = UserMedia.query.filter_by(user_id=user_id).all()
    media_list = [user_media.media.to_dict() for user_media in user_medias]
    response = make_response(
        media_list,
        200
    )
    return response

@app.route('/save_media', methods=['POST'])
def save_media():
    user_id = session.get('user_id')
    data = request.get_json()
    media_id = data.get('media_id')
    if not media_id:
        response = make_response(
            {'error': 'Media ID is required'},
            400
        )
        return response
    
    existing_media = UserMedia.query.filter_by(user_id=user_id, media_id=media_id).first()
    if existing_media:
        response = make_response(
            {'error': 'Media already saved'},
            400
        )
        return response
    
    new_media = UserMedia(user_id=user_id, media_id=media_id)
    db.session.add(new_media)
    db.session.commit()
    response = make_response(
        {'message': 'Media saved successfully'},
        201
    )
    return response

@app.route('/delete_media/<int:media_id>', methods=['DELETE'])
def delete_media(media_id):
    user_id = session.get('user_id')
    user_media = UserMedia.query.filter_by(user_id=user_id, media_id=media_id).first()
    if user_media:
        db.session.delete(user_media)
        db.session.commit()
        response = make_response(
            {'message': 'Media deleted successfully'},
            200
        )
        return response
    else:
        response = make_response(
        {'error': 'Media not found'},
        404
    )
    return response

@app.route('/check_session', methods=['GET'])
def check_account():
    user = User.query.filter(User.id == session.get('user_id')).first()
    if user:
        user_data = user.to_dict()
        return make_response(user_data,204)
    else:
        response = make_response(
        {not "account" : None },
        404
    )
    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)