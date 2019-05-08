json.extract! user, :id, :username, :password, :email, :displayed_name
json.photoUrl url_for(user.photo)