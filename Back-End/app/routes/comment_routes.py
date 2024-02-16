# backend/app/routes/comment_routes.py

from flask import Blueprint, jsonify, request
from app.controllers.comment_controller import create_comment, get_comments_for_post

comment_routes = Blueprint('comment_routes', __name__)

@comment_routes.route('/comments', methods=['POST'])
def create_comment_route():
    data = request.get_json()
    content = data['content']
    post_id = data['post_id']
    create_comment(content, post_id)
    return jsonify({'message': 'Comment created successfully'}), 201

@comment_routes.route('/comments/<int:post_id>', methods=['GET'])
def get_comments_for_post_route(post_id):
    comments = get_comments_for_post(post_id)
    return jsonify({'comments': [{'content': comment.content} for comment in comments]})
