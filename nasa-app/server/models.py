from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String)
    
    user_media = db.relationship('UserMedia', back_populates='user', cascade='all, delete-orphan')

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
class Media(db.Model, SerializerMixin):
    __tablename__ = 'medias'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=False)
    explanation = db.Column(db.String, nullable=False)
    copyright =  db.Column(db.String, nullable=False)
    media_type = db.Column(db.String, nullable=False)
    url = db.Column(db.String, nullable=False)
    hd_url = db.Column(db.String, nullable=False)

    user_media = db.relationship('UserMedia', back_populates='media', cascade='all, delete-orphan')

class UserMedia(db.Model, SerializerMixin):
    __tablename__ = 'user_medias'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    media_id = db.Column(db.Integer, db.ForeignKey('medias.id'))

    user = db.relationship('User', back_populates='user_medias')
    media = db.relationship('Media', back_populates='user_medias')
