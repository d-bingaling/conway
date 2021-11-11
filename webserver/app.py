from flask import Flask, jsonify

app = Flask(__name__)

# app.route is a decorator, this allows us to use the url route
# without writing hella code.
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/foo")
def foo():
    return "<p>Bar!</p>"

@app.route("/dan/<name>")
def dan(name):
    return f"<h1>Hi {name}</h1>"

# creating a user table
users = {
    1: {"name": "Alice", "job": "Doctor"},
    2: {"name": "Bob", "job": "Fireman"},
    3: {"name": "Claire", "job": "Police"},
    4: {"name": "Dave", "job": "Greengrocer"},
    5: {"name": "Emily", "job": "Helicopter Pilot"},
}

# adding <> to the route works as a variable
# add int to the beginning of the variabe, as that is what we expect to recieve.
@app.route("/user/<int:user_id>/job")
def get_user(user_id):

    user = users[user_id]

    return jsonify(user)

# get just a users job
@app.route("/user/<int:user_id>/job")
def get_userjob(user_id):

    user = users[user_id]
    # make sure job is in quotes, as it is a string
    job = user["job"]
    return jsonify(job)



# get any detail about a user 
@app.route("/user/<int:user_id>/<key>")
def get_userdetails(user_id, key):
    try:
        user = users[user_id]
    # raising an error if the user does not exist, 404 will show when you inspect in the dev tools as it is a bad request.
    except KeyError:
        return jsonify("That user doesn't exist"), 404    

    try:
        key = user[key]
    except KeyError:
    # if a detail is entered that does not exist in the table then an error is thrown.
        return jsonify(f"We don't have a detail called '{key}'"), 400
   
    return jsonify(key) 