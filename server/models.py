from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String, nullable=False)
    
    user_medias = db.relationship('UserMedia', back_populates='user', cascade='all, delete-orphan')

    serialize_rules = ('-user_media.user', )

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
class Media(db.Model, SerializerMixin):
    __tablename__ = 'medias'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=True)
    date = db.Column(db.String, nullable=True)
    explanation = db.Column(db.String, nullable=True)
    copyright =  db.Column(db.String, nullable=True)
    media_type = db.Column(db.String, nullable=True)
    url = db.Column(db.String, nullable=True)
    hd_url = db.Column(db.String, nullable=True)

    user_medias = db.relationship('UserMedia', back_populates='media', cascade='all, delete-orphan')

    serialize_rules = ('-user_media.media', )

class UserMedia(db.Model, SerializerMixin):
    __tablename__ = 'user_medias'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    media_id = db.Column(db.Integer, db.ForeignKey('medias.id'))

    user = db.relationship('User', back_populates='user_medias')
    media = db.relationship('Media', back_populates='user_medias')

    serialize_rules = ('-user.user_medias', '-media.user_medias' )
