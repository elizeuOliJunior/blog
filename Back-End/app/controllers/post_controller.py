
from app.models.post_model import Post
from app import db

def create_post(title, content):
    new_post = Post(title=title, content=content)
    db.session.add(new_post)
    db.session.commit()

def get_all_posts():
    return Post.query.all()
