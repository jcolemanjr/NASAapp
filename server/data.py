from models import User, Media, UserMedia, db
from app import app
import json

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

    

    def load_json_data_to_db(json_file_path):
        with open(json_file_path, 'r') as file:
            # print(file)
            data = json.load(file)  # Load the JSON data from file
            print(data['Media Gallery'])
        # for index, entry in enumerate(data):
        #     try:
        #         # Ensure that 'entry' is a dictionary
        #         if not isinstance(entry, dict):
        #             raise ValueError(f"Entry at index {index} is not a dictionary. It is: {entry}")

        #         # Create a new Media instance for each entry in the JSON data
        #         new_media = Media(
        #             title=entry.get('title'),
        #             date=entry.get('date'),
        #             explanation=entry.get('explanation'),
        #             copyright=entry.get('copyright'),
        #             media_type=entry.get('media_type'),
        #             url=entry.get('url'),
        #             hd_url=entry.get('hdurl')
        #         )
        #         db.session.add(new_media)  # Add the new instance to the session
        #     except Exception as e:
        #         print(f"An error occurred with entry at index {index}: {e}")
        #         db.session.rollback()
        #         continue

        # db.session.commit()  # Commit the session to save the objects to the database
        # print("Data loaded successfully!")


    # Specify the path to your json file
    json_file_path = 'client/db.json'

    # Call the function to load the data
    load_json_data_to_db(json_file_path)




    db.session.add(u1)
    db.session.add(me)
    db.session.add(u_m)
    db.session.commit()