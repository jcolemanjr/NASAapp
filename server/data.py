from models import Media, db
from app import app
import json


with open('db.json', 'r') as file:
    data = json.load(file)


with app.app_context():

    try:
        num_rows_deleted = db.session.query(Media).delete()
        db.session.commit()
        print(f"Deleted {num_rows_deleted} rows from Media table.")
    except Exception as e:
        db.session.rollback() 
        print(f"Error deleting rows: {e}")


    for entry in data:
        media_item = Media(
            title=entry.get('title'),
            date=entry.get('date'),
            explanation=entry.get('explanation'),
            copyright=entry.get('copyright'),
            media_type=entry.get('media_type'),
            url=entry.get('url'),
            hd_url=entry.get('hdurl')
        )

        db.session.add(media_item)
    
    try:
        db.session.commit()
        print("Data imported successfully!")
    except Exception as e:
        db.session.rollback()
        print(f"Error importing data: {e}")
