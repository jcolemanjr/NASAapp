from models import User, Media, UserMedia, db
from app import app

with app.app_context():
    User.query.delete()
    Media.query.delete()
    UserMedia.query.delete()
    u1=User(
        id = 1,
        username = 'adan',
        password_hash = 'uirhv3ui474u4v',
    )

    me = Media(
        id = 1,
        title = 'ajdc',
        date = 'hdcnecjn',
        explanation = 'kjrbcucueijeicjiencen',
        copyright =  'jebcueg',
        media_type = 'uegu',
        url = 'bcguch',
        hd_url = 'ebygcgegc'
    )

    u_m=UserMedia(
        id = 1,
        user_id = 1,
        media_id = 1
    )

    db.session.add(u1)
    db.session.add(me)
    db.session.add(u_m)
    db.session.commit()