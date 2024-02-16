
from app.models.comment_model import Comment
from app import db

def create_comment(content, post_id):
    new_comment = Comment(content=content, post_id=post_id)
    db.session.add(new_comment)
    db.session.commit()

def get_comments_for_post(post_id):
    return Comment.query.filter_by(post_id=post_id).all()
